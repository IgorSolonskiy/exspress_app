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
import {
  getSubscriptionsAsync, updateSubscriptionAsync,
} from '../store/subscriptions/action';
import {apiClient} from '../libs/apiClient';

export const Profile = () => {
  const profile = useSelector(state => state.auth.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAsync(profile.username));
    dispatch(getSubscriptionsAsync());
  }, [dispatch, profile.username]);

  const handleCreateCheckoutSession = async (subscription) => {
    const {lookup_key} = subscription;

    const url = await apiClient.post('create-checkout-session', {
      lookup_key,
    });

    window.location.replace(url.data);
  };

  const handleUpdateSubscription = async (
      currentSubscription, updatedSubscription) => await dispatch(
      updateSubscriptionAsync(currentSubscription.id, updatedSubscription));

  return (
      <MenuLayout>
        <Container>
          <ProfileTitle>
            <ProfileTitleIcon className="fas fa-arrow-left"/> {profile.name}
          </ProfileTitle>
          <ProfileCard/>
          <ProfileMenu onUpdateSubscription={handleUpdateSubscription}
                       onSubscribe={handleCreateCheckoutSession}/>
        </Container>
      </MenuLayout>
  );
};