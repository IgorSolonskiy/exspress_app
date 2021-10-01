import {
  Navigation, NavigationContent,
  NavigationItem, SubscriptionData, SubscriptionWrapper,
} from '../../styled/components/pages/Profile';
import {PostsList} from '../lists/PostsList';
import {SubscriptionList} from '../lists/SubscriptionList';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getPaymentMethodAsync} from '../../store/subscriptions/action'
import {PaymentCard} from '../cards/PaymentCard';

export const ProfileMenu = ({onSubscribe, onUnsubscribe}) => {
  const profile = useSelector(state => state.auth.profile);
  const currentSubscription = useSelector(state => state.subscriptions.currentSubscription);
  const dispatch = useDispatch();
  const {menu} = useParams();

  useEffect(() => {
    if (!currentSubscription)
      return null;

    dispatch(getPaymentMethodAsync(currentSubscription.payment_method));
  }, [currentSubscription]);

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
          <SubscriptionList onSubscribe={onSubscribe}
                            onUnsubscribe={onUnsubscribe}/>
          <SubscriptionData>
            <PaymentCard/>
          </SubscriptionData>
        </SubscriptionWrapper>
      </>
  );
};