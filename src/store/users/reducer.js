import {createSlice} from '@reduxjs/toolkit';

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
    setUser(state, action) {
      state.user = action.payload;
    },
    unfollow(state) {
      state.user = {
        ...state.user,
        following: false
      };
    },
  },
});

export default usersSlice.reducer;
export const {
  setUsers,
  setUser,
  unfollow
} = usersSlice.actions;