import {combineReducers} from '@reduxjs/toolkit';
import auth from './auth/reducer';
import posts from './posts/reducer';

export const reducers = combineReducers({
  auth,
  posts,
});