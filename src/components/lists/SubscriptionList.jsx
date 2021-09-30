import {
  Container,
} from '../../styled/components/lists/SubscriptionList';
import {useSelector} from 'react-redux';
import {SubscriptionCard} from '../cards/SubscriptionCard';

export const SubscriptionList = () => {
  const subscriptions = useSelector(state => state.subscriptions.subscriptions);

  if (!subscriptions.length)
    return null;

  return (
      <Container>
        {subscriptions.map(
            subscription => <SubscriptionCard key={subscription.id} subscription={subscription}/>)}
      </Container>
  );
};