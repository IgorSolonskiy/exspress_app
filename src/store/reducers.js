import {combineReducers} from '@reduxjs/toolkit';
import auth from './auth/reducer';
import posts from './posts/reducer';
import subscriptions from './subscriptions/reducer';

export const reducers = combineReducers({
  auth,
  posts,
  subscriptions
});