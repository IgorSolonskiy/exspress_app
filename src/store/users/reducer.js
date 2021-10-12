import {createSlice} from '@reduxjs/toolkit';
import {showError} from '../../helpers/exceptions/apiError';
import {
  followAsync,
  getUserAsync,
  getUsersAsync,
  unfollowAsync,
} from './action';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    user: null,
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
  },
  extraReducers: {
    [getUsersAsync.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [getUsersAsync.rejected]: showError,
    [getUserAsync.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [getUserAsync.rejected]: showError,
    [followAsync.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [followAsync.rejected]: showError,
    [unfollowAsync.fulfilled]: (state) => {
      state.user = {...state.user, following: false};
    },
    [unfollowAsync.rejected]: showError,
  },
});

export default usersSlice.reducer;
export const {
  setUsers,
} = usersSlice.actions;