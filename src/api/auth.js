import {apiClient} from '../libs/apiClient';
import {message} from 'antd';

export const login = async credentials => {
  try {
    const {data: response} = await apiClient.post('auth/login', credentials);

    return localStorage.setItem('accessToken',response.accessToken)
  } catch (e) {
    message.error('Internal server error.');
  }
}