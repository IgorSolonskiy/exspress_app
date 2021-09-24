import {combineReducers} from '@reduxjs/toolkit';
import auth from './auth/reducer';

export const reducers = combineReducers({
  auth
})