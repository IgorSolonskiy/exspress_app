import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiClient} from '../../libs/apiClient';

export const setPostAsync = createAsyncThunk(
    'posts/setPostSync',
    async (post, {rejectWithValue}) => {
      try {
        const {data: response} = await apiClient.post('possts', post);

        return response;
      } catch(e) {
        return rejectWithValue(e?.response?.data?.message);
      }
    },
);

export const getPostsAsync = createAsyncThunk(
    'posts/getPostsAsync',
    async (user, {rejectWithValue}) => {
      try {
        const {data: response} = await apiClient.get(`users/${user}/posts`);

        return response;
      } catch(e) {
        return rejectWithValue(e?.response?.data?.message);
      }
    },
);

export const getPostFeedAsync = createAsyncThunk(
    'pots/getPostsFeed',
    async (_, {rejectWithValue}) => {

      try {
        const {data: response} = await apiClient.get(`posts/feed`);

        return response;
      } catch(e) {
        return rejectWithValue(e?.response?.data?.message);
      }
    },
);

export const deletePostAsync = createAsyncThunk(
    'posts/deletePostAsync',
    async (id, {rejectWithValue}) => {
      try {
        await apiClient.delete(`posts/${id}`);

        return id;
      } catch(e) {
        return rejectWithValue(e?.response?.data?.message);
      }
    },
);

export const updatePostAsync = createAsyncThunk(
    'posts/updatePostAsync',
    async ({id,content}, {rejectWithValue}) => {
      try {
        const {data: response} = await apiClient.put(`posts/${id}`, {content});

        return response;
      } catch(e) {
        return rejectWithValue(e?.response?.data?.message);
      }
    },
);