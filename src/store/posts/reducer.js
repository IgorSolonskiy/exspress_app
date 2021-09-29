import {createSlice} from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {
    setPost(state, action) {
      state.posts = [action.payload, ...state.posts];
    },
    setPosts(state, action) {
      state.posts = [...action.payload];
    },
    removePost(state, action) {
      state.posts = state.posts.filter(post => post._id !== action.payload);
    },
    updatePost(state, action) {
      state.posts = state.posts.map(post => {
        if (post._id === action.payload._id) {
          post.content = action.payload.content;
        }

        return post;
      });
    },
  },
});

export default postsSlice.reducer;
export const {setPost, setPosts, removePost, updatePost} = postsSlice.actions;