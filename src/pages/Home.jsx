import {MenuLayout} from '../components/layouts/MenuLayout';
import {
  HomeTitle,
  MainWrapper,
  SidebarWrapper,
} from '../styled/components/pages/Home';
import {CreatePostForm} from '../components/forms/CreatePostForm';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getProfileAsync} from '../store/auth/actions';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      dispatch(getProfileAsync());
    }, 15000);
  });

  return (
      <MenuLayout>
        <MainWrapper>
          <HomeTitle>Home</HomeTitle>
          <CreatePostForm/>
        </MainWrapper>
        <SidebarWrapper>

        </SidebarWrapper>
      </MenuLayout>
  );
};