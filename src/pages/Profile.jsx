import {MenuLayout} from '../components/layouts/MenuLayout';
import {
  Container,
  ProfileTitle,
  ProfileTitleIcon,
} from '../styled/components/pages/Profile';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {
  deletePostAsync,
  getPostsAsync,
  updatePostAsync,
} from '../store/posts/actions';
import {ProfileMenu} from '../components/menus/ProfileMenu';
import {ProfileCard} from '../components/cards/ProfileCard';
import {
  getSubscriptionsAsync, updateSubscriptionAsync,
} from '../store/subscriptions/action';
import {apiClient} from '../libs/apiClient';
import 'react-credit-cards/lib/styles.scss';
import {useParams} from 'react-router-dom';
import {followAsync, getUserAsync, unfollowAsync} from '../store/users/action';

export const Profile = () => {
  const currentSubscription = useSelector(
      state => state.subscriptions.currentSubscription);
  const profile = useSelector(state => state.auth.profile);
  const user = useSelector(state => state.users.user);
  let {username} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAsync(username));
  }, [dispatch, username]);

  useEffect(() => {
    dispatch(getPostsAsync(profile.username));
    dispatch(getSubscriptionsAsync());
  }, [dispatch, profile.username]);

  const handleCreateCheckoutSession = async (subscription) => {
    if (currentSubscription)
      return null;

    const {lookup_key} = subscription;

    const url = await apiClient.post('create-checkout-session', {
      lookup_key,
    });

    window.location.replace(url.data);
  };

  const handleUpdateSubscription = async (
      {id}, updatedData) => await dispatch(
      updateSubscriptionAsync({id, updatedData}));

  const handleFollowUser = async (username) => dispatch(followAsync(username));
  const handleUnfollowUser = async (username) => dispatch(
      unfollowAsync(username));
  const handleDeletePost = (id) => dispatch(deletePostAsync(id));
  const handleUpdatePost = (id) => content => dispatch(
      updatePostAsync(id, content));

  if (!user || !profile)
    return null;

  return (
      <MenuLayout>
        <Container>
          <ProfileTitle>
            <ProfileTitleIcon className="fas fa-arrow-left"/> {user.name}
          </ProfileTitle>
          <ProfileCard onUnfollow={handleUnfollowUser}
                       onFollow={handleFollowUser}/>
          <ProfileMenu onUpdateSubscription={handleUpdateSubscription}
                       onSubscribe={handleCreateCheckoutSession}
                       onUpdatePost={handleUpdatePost}
                       onDeletePost={handleDeletePost}/>
        </Container>
      </MenuLayout>
  );
};