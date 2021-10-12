import {apiClient} from '../../libs/apiClient';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getProfileAsync = createAsyncThunk(
    'auth/getProfileAsync',
    async (_,{rejectWithValue}) => {
      try {
        const {data: response} = await apiClient.get('auth/profile');

        return response;
      } catch (e) {
        return rejectWithValue(e?.response?.data?.message);
      }
    },
);