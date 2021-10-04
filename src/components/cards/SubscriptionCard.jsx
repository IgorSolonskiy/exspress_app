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
import {useSelector} from 'react-redux';
import {UpdateSubscriptionModal} from '../modals/UpdateSubscriptionModal';

export const SubscriptionCard = ({
                                   subscription,
                                   onSubscribe,
                                   onUpdateSubscription,
                                 }) => {
  const currentSubscription = useSelector(
      state => state.subscriptions.currentSubscription);

  const handleUpdateSubscription = async (updatedSubscription) => await onUpdateSubscription(
      currentSubscription, updatedSubscription);

  const isCurrentSubscription = currentSubscription &&
      subscription.lookup_key === currentSubscription.name;

  const disabledCard = () => {
    if (!currentSubscription)
      return false;

    if (isCurrentSubscription) {
      return false;
    }

    if (currentSubscription.name === 'pro') {
      return subscription.lookup_key !== 'ultimate';
    }

    if (currentSubscription.name === 'ultimate') {
      return true;
    }
  };

  const isDisable = disabledCard();

  const btnTextControl = currentSubscription && !isDisable
      ? 'Upgrade'
      : 'Subscribe';

  const popularCard = isCurrentSubscription ?
      <PopularWrapper>
        <PopularIcon className="fas fa-check"/>
      </PopularWrapper> : '';

  const btnControl = isCurrentSubscription
      ?
      <UpdateSubscriptionModal currentSubscription={currentSubscription}
                               onUpdateSubscription={handleUpdateSubscription}/>
      :
      <CardBtn onClick={() => onSubscribe(subscription)}>
        {btnTextControl}
      </CardBtn>;

  return (
      <SubscriptionCardWrapper>
        <BookmarkIcon className="far fa-bookmark" color="#FF0000"/>
        {popularCard}
        <DisabledWrapper visible={isDisable}/>
        <div className="description">
          <CardTitle>{subscription.lookup_key}</CardTitle>
          <PriceCard>${subscription.unit_amount_decimal / 100}.00 /
            month</PriceCard>
          {btnControl}
        </div>
      </SubscriptionCardWrapper>
  );
};