import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    profile: null,
  },
  reducers: {
    setProfile(state, action) {
      state.profile = action.payload;
    },
  },
});

export default authSlice.reducer;
export const {setProfile} = authSlice.actions;