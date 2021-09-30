import {MenuLayout} from '../components/layouts/MenuLayout';
import {
  Container,
  ProfileTitle,
  ProfileTitleIcon,
} from '../styled/components/pages/Profile';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getPostsAsync} from '../store/posts/actions';
import {ProfileMenu} from '../components/menus/ProfileMenu';
import {ProfileCard} from '../components/cards/ProfileCard';
import {getSubscriptionsAsync} from '../store/subscriptions/action';

export const Profile = () => {
  const profile = useSelector(state => state.auth.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAsync(profile.username));
    dispatch(getSubscriptionsAsync());
  }, [dispatch, profile.username]);

  return (
      <MenuLayout>
        <Container>
          <ProfileTitle>
            <ProfileTitleIcon className="fas fa-arrow-left"/> {profile.name}
          </ProfileTitle>
          <ProfileCard/>
          <ProfileMenu/>
        </Container>
      </MenuLayout>
  );
};