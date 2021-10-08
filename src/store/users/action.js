import {apiClient} from '../../libs/apiClient';
import {message} from 'antd';
import {setUser, setUsers, unfollow} from './reducer';

export const getUsersAsync = (username) => async dispatch => {
  try {
    const {data: response} = await apiClient.get(`users?username=${username}`);

    return dispatch(setUsers(response));
  } catch (e) {
    message.error('Internal server error.');
  }
};

export const getUserAsync = (username) => async dispatch => {
  try {
    const {data: response} = await apiClient.get(`users/${username}`);

    return dispatch(setUser(response));
  } catch (e) {
    message.error('Internal server error.');
  }
};

export const followAsync = (username) => async dispatch => {
  try {
    const {data: response} = await apiClient.post(`users/${username}/follow`);

    return dispatch(setUser(response));
  } catch (e) {
    message.error('Internal server error.');
  }
};

export const unfollowAsync = (username) => async dispatch => {
  try {
    await apiClient.delete(`users/${username}/unfollow`);

    return dispatch(unfollow());
  } catch (e) {
    message.error('Internal server error.');
  }
};