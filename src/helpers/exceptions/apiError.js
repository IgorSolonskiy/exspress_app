import {message} from 'antd';

export const showError = (state, action) => {
  message.error(action.payload);
  state.isLoading = false
};