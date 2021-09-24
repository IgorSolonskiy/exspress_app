import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers:{
    'Access-Control-Allow-Credentials':'true'
  }
});

apiClient.interceptors.request.use(config => {
  const jwt = localStorage.getItem('jwt');

  if (jwt)
    config.headers.Authorization = `Bearer ${jwt}`;

  return config;
});

apiClient.interceptors.request.use((config => {
  return config;
}), (async error => {
  const originalRequest = error.config;

  if (error.response.status === 401) {
   try{
     const {data: {tokens}} = await apiClient.get('auth/refresh');

     localStorage.setItem('jwt', tokens.accessToken);

     return apiClient.request(originalRequest);
   } catch (e) {
     console.log('User is not logged in.')
   }
  }

}));
