import {createSlice} from '@reduxjs/toolkit';
import {
  deletePostAsync,
  getPostFeedAsync, getPostsAsync,
  setPostAsync, updatePostAsync,
} from './actions';
import {showError} from '../../helpers/exceptions/apiError';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    isLoading:false
  },
  reducers:{
    setPost(state, action) {
      state.posts = [action.payload, ...state.posts];
    },
  },
  extraReducers: {
    [setPostAsync.fulfilled]: (state, action) => {
      state.posts = [action.payload, ...state.posts];
    },
    [setPostAsync.rejected]: showError,
    [getPostsAsync.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false
    },
    [getPostsAsync.pending]: (state) => {
      state.isLoading = true
    },
    [getPostsAsync.rejected]: showError,
    [getPostFeedAsync.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false
    },
    [getPostFeedAsync.rejected]: showError,
    [getPostFeedAsync.pending]: (state) => {
      state.isLoading = true
    },
    [deletePostAsync.fulfilled]: (state, action) => {
      state.posts = state.posts.filter(post => post._id !== action.payload);
    },
    [deletePostAsync.rejected]: showError,
    [updatePostAsync.fulfilled]: (state, action) => {
      state.posts = state.posts.map(post => {
        if (post._id === action.payload._id) {
          post.content = action.payload.content;
        }

        return post;
      });
    },
    [updatePostAsync.rejected]: showError,
  },
});

export default postsSlice.reducer;
export const {
  setPost,
} = postsSlice.actions;