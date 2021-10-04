import {
  Navigation,
  NavigationContent,
  NavigationItem,
  SubscriptionData,
  SubscriptionWrapper,
} from '../../styled/components/pages/Profile';
import {PostsList} from '../lists/PostsList';
import {SubscriptionList} from '../lists/SubscriptionList';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getPaymentMethodAsync} from '../../store/subscriptions/action';
import {InfoPaymentCard} from '../cards/InfoPaymentCard';
import {SubscriptionInfo} from '../subscriptions/SubscriptionInfo';
import {CreatePaymentCard} from '../cards/CreatePaymentCard';

export const ProfileMenu = ({onSubscribe, onUpdateSubscription}) => {
  const profile = useSelector(state => state.auth.profile);
  const currentSubscription = useSelector(
      state => state.subscriptions.currentSubscription);
  const dispatch = useDispatch();
  const {menu} = useParams();

  useEffect(() => {
    if (!currentSubscription)
      return null;

    if (!currentSubscription.payment_method)
      return null;

    dispatch(getPaymentMethodAsync(currentSubscription.payment_method));
  }, [currentSubscription, dispatch]);

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
                            onUpdateSubscription={onUpdateSubscription}/>
          <SubscriptionData>
            <SubscriptionInfo/>
            <InfoPaymentCard/>
            <CreatePaymentCard/>
          </SubscriptionData>
        </SubscriptionWrapper>
      </>
  );
};