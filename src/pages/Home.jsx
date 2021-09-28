import {MenuLayout} from '../components/layouts/MenuLayout';
import {
  HomeTitle,
  MainWrapper,
  SidebarWrapper,
} from '../styled/components/pages/Home';
import {CreatePostForm} from '../components/forms/CreatePostForm';
import {SearchForm} from '../components/forms/SearchForm';
import {TrendsList} from '../components/lists/TrendsList';
import {useDispatch} from 'react-redux';
import {setPostAsync} from '../store/posts/actions';
import {PostsList} from '../components/lists/PostsList';

export const Home = () => {
  const dispatch = useDispatch();

  const handleCreatePost = (post) => dispatch(setPostAsync(post));

  return (
      <MenuLayout>
        <MainWrapper>
          <HomeTitle>Home</HomeTitle>
          <CreatePostForm onCreatePost={handleCreatePost}/>
          <PostsList />
        </MainWrapper>
        <SidebarWrapper>
          <SearchForm/>
          <TrendsList/>
        </SidebarWrapper>
      </MenuLayout>
  );
};