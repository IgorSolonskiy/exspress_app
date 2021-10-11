import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Credentials': 'true',
  },
});

apiClient.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

apiClient.interceptors.response.use((config => {
  return config;
}), (async error => {
  const originalRequest = error.config;

  if (error.response.status === 401 && originalRequest.url !== 'auth/refresh') {
    try {

      const {data: {accessToken}} = await apiClient.get('auth/refresh');

      localStorage.setItem('accessToken', accessToken);

      return apiClient.request(originalRequest);
    } catch (e) {
      localStorage.removeItem('accessToken');
      return apiClient.get('auth/logout');
    }
  }

  return Promise.reject(error);
}));
