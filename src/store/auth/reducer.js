import {createSlice} from '@reduxjs/toolkit';
import {showError} from '../../helpers/exceptions/apiError';
import {getProfileAsync} from './actions';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    profile: null,
  },
  extraReducers: {
    [getProfileAsync.fulfilled]: (state, action) => {
      state.profile = action.payload;
    },
    [getProfileAsync.rejected]: showError,
  }
});

export default authSlice.reducer;