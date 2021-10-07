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
import {UpgradeSubscriptionModal} from '../modals/UpgradeSubscriptionModal';

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

  const btnUpdateControl = currentSubscription && !isDisable
      ? <UpgradeSubscriptionModal onUpdate={handleUpdateSubscription} subscription={subscription}/>
      : <CardBtn onClick={() => onSubscribe(subscription)}>
        Subscribe
      </CardBtn>;

  const popularCard = isCurrentSubscription ?
      <PopularWrapper>
        <PopularIcon className="fas fa-check"/>
      </PopularWrapper> : '';

  const btnControl = isCurrentSubscription
      ?
      <UpdateSubscriptionModal currentSubscription={currentSubscription}
                               onUpdateSubscription={handleUpdateSubscription}/>
      :
      btnUpdateControl;

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