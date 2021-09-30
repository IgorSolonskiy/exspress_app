import {
  Navigation, NavigationContent,
  NavigationItem, SubscriptionWrapper,
} from '../../styled/components/pages/Profile';
import {PostsList} from '../lists/PostsList';
import {SubscriptionList} from '../lists/SubscriptionList';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

export const ProfileMenu = () => {
  const profile = useSelector(state => state.auth.profile);
  const {menu} = useParams();

  const subscribeControl = menu === 'subscriptions' ? 'active-item' : '';

  return (
      <>
        <Navigation>
          <NavigationItem className={!menu && 'active-item'}><Link
              to={`/${profile.username}`}>Tweets</Link></NavigationItem>
          <NavigationItem
              className={subscribeControl}><Link
              to={`/${profile.username}/subscriptions`}>Subscriptions</Link></NavigationItem>
        </Navigation>
        <NavigationContent visible={!menu}>
          <PostsList/>
        </NavigationContent>
        <SubscriptionWrapper visible={subscribeControl}>
          <SubscriptionList/>
        </SubscriptionWrapper>
      </>
  );
};