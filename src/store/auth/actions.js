import {setProfile} from './reducer';
import {apiClient} from '../../libs/apiClient';
import {message} from 'antd';

export const getProfileAsync = () => async dispatch => {
  try {
    const {data: response} = await apiClient.get('auth/profile');

    if(!response){
      return dispatch(setProfile(null));
    }

    return dispatch(setProfile(response));
  } catch (e) {
    message.error('Internal server error.');
  }
};