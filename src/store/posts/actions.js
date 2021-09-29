import {setPost, setPosts, removePost, updatePost} from './reducer';
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

export const removePostAsync = (id) => async dispatch => {
  try {
    await apiClient.delete(`posts/${id}`);

    return dispatch(removePost(id));
  } catch (e) {
    message.error('Internal server error.');
  }
};

export const updatePostAsync = (id, content) => async dispatch => {
  try {
    const {data: response} = await apiClient.put(`posts/${id}`, {content});

    return dispatch(updatePost(response));
  } catch (e) {
    message.error('Internal server error.');
  }
};