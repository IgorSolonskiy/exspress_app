import {
  Container,
} from '../../styled/components/lists/SubscriptionList';
import {useSelector} from 'react-redux';
import {SubscriptionCard} from '../cards/SubscriptionCard';

export const SubscriptionList = ({onSubscribe, onUpdateSubscription}) => {
  const subscriptions = useSelector(state => state.subscriptions.subscriptions);

  if (!subscriptions.length)
    return null;

  return (
      <Container>
        {subscriptions.map(
            subscription => <SubscriptionCard onUpdateSubscription={onUpdateSubscription}
                                              onSubscribe={onSubscribe}
                                              key={subscription.id}
                                              subscription={subscription}/>)}
      </Container>
  );
};