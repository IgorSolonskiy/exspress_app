import {login} from './reducer';
import {message} from 'antd';
import {apiClient} from '../../libs/apiClient';

export const loginAsync = (credentials) => async dispatch => {
  try {
    const {data: response} = await apiClient.post('auth/login', credentials);

    localStorage.setItem('jwt',response.accessToken)

    return dispatch(login(response));
  } catch (e) {
    message.error('Internal server error.');
  }
};

export const refreshAsync = () => async dispatch => {
  try {
    const {data: response} = await apiClient.get('auth/refresh');

    localStorage.setItem('jwt',response.accessToken)

    return dispatch(login(response));
  } catch (e) {
    localStorage.removeItem('jwt')
  }
};