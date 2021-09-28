import {setPost, setPosts} from './reducer';
import {apiClient} from '../../libs/apiClient';
import {message} from 'antd';

export const setPostAsync = (post) => async dispatch => {
  try {
    const {data: response} = await apiClient.post('posts', post);

    return dispatch(setPost(response));
  } catch (e) {
    message.error('Internal server error.');
  }
};

export const getPostsAsync = (user) => async dispatch => {
  try {
    const {data: response} = await apiClient.get(`users/${user}/posts`);

    return dispatch(setPosts(response));
  } catch (e) {
    message.error('Internal server error.');
  }
};