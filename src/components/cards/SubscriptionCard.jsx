import {
  BookmarkIcon,
  CardBtn,
  CardTitle,
  DisabledWrapper,
  PopularIcon,
  PopularWrapper,
  PriceCard,
  SubscriptionCardWrapper,
} from '../../styled/components/lists/SubscriptionList';
import {apiClient} from '../../libs/apiClient';
import {useSelector} from 'react-redux';

export const SubscriptionCard = ({subscription}) => {
  const currentSubscription = useSelector(
      state => state.subscriptions.currentSubscription);

  const disabledCard = () => {
    if (!currentSubscription)
      return false;

    if (subscription.lookup_key === currentSubscription.name) {
      return false;
    }

    if (currentSubscription.name === 'pro') {
      return subscription.lookup_key !== 'ultimate';
    }

    if (currentSubscription.name === 'ultimate') {
      return true;
    }
  };

  const handleCreateCheckoutSession = async () => {
    const {lookup_key} = subscription;

    const url = await apiClient.post('create-checkout-session', {
      lookup_key,
    });

    window.location.replace(url.data);
  };

  const popularCard = currentSubscription &&
  subscription.lookup_key === currentSubscription.name ?
      <PopularWrapper>
        <PopularIcon className="fas fa-check"/>
      </PopularWrapper> : '';

  const btnControl = currentSubscription &&
  subscription.lookup_key === currentSubscription.name ?
      <CardBtn danger onClick={handleCreateCheckoutSession}>Unsubscribe</CardBtn> :
      <CardBtn onClick={handleCreateCheckoutSession}>{disabledCard() ? 'Subscribe' : 'Upgrade'}</CardBtn>;

  return (
      <SubscriptionCardWrapper>
        <BookmarkIcon className="far fa-bookmark" color="#FF0000"/>
        {popularCard}
        <DisabledWrapper visible={disabledCard()}/>
        <div className="description">
          <CardTitle>{subscription.lookup_key}</CardTitle>
          <PriceCard>${subscription.unit_amount_decimal / 100}.00 /
            month</PriceCard>
          {btnControl}
        </div>
      </SubscriptionCardWrapper>
  );
};