import {apiClient} from '../../libs/apiClient';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getUsersAsync = createAsyncThunk(
    'users/getUsersAsync',
    async (username, {rejectWithValue}) => {
      try {
        const {data: response} = await apiClient.get(
            `users?username=${username}`);

        return response;
      } catch (e) {
        return rejectWithValue(e?.response?.data?.message);
      }
    },
);

export const getUserAsync = createAsyncThunk(
    'users/getUserAsync',
    async (username, {rejectWithValue}) => {
      try {
        const {data: response} = await apiClient.get(`users/${username}`);

        return response;
      } catch (e) {
        return rejectWithValue(e?.response?.data?.message);
      }
    },
);

export const followAsync = createAsyncThunk(
    'users/followAsync',
    async (username, {rejectWithValue}) => {
      try {
        const {data: response} = await apiClient.post(
            `users/${username}/follow`);

        return response;
      } catch (e) {
        return rejectWithValue(e?.response?.data?.message);
      }
    },
);

export const unfollowAsync = createAsyncThunk(
    'users/unfollowAsync',
    async (username,{rejectWithValue}) => {
      try {
        await apiClient.delete(`users/${username}/unfollow`);
      } catch (e) {
        return rejectWithValue(e?.response?.data?.message);
      }
    },
);