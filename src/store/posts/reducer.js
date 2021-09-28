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
      state.posts = [...state.posts, ...action.payload];
    },
  },
});

export default postsSlice.reducer;
export const {setPost,setPosts} = postsSlice.actions;