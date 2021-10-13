import {MenuLayout} from '../components/layouts/MenuLayout';
import {
  HomeTitle,
  MainWrapper,
} from '../styled/components/pages/Home';
import {CreatePostForm} from '../components/forms/CreatePostForm';
import {useDispatch, useSelector} from 'react-redux';
import {
  getPostFeedAsync,
  deletePostAsync,
  setPostAsync,
  updatePostAsync,
} from '../store/posts/actions';
import {PostsList} from '../components/lists/PostsList';
import {useEffect} from 'react';
import {setPost} from '../store/posts/reducer';
import {socket} from '../libs/socket';

export const Home = () => {
  const profile = useSelector(state => state.auth.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken)
      return null;

    socket.auth = {accessToken};
    socket.connect();
    socket.on('post', handlePostsFeed);

    return () => {
      socket.off('post', handlePostsFeed);
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    dispatch(getPostFeedAsync());
  }, [dispatch, profile.username]);

  const handlePostsFeed = ({post}) => {
    dispatch(setPost(post));
  };

  const handleCreatePost = (post) => dispatch(setPostAsync(post));
  const handleDeletePost = (id) => dispatch(deletePostAsync(id));
  const handleUpdatePost = (id) => content => dispatch(
      updatePostAsync({id, content}));

  return (
      <MenuLayout>
        <MainWrapper>
          <HomeTitle>Home</HomeTitle>
          <CreatePostForm onCreatePost={handleCreatePost}/>
          <PostsList onUpdatePost={handleUpdatePost}
                     onDeletePost={handleDeletePost}/>
        </MainWrapper>
      </MenuLayout>
  );
};