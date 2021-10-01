import {
  Container,
} from '../../styled/components/lists/SubscriptionList';
import {useSelector} from 'react-redux';
import {SubscriptionCard} from '../cards/SubscriptionCard';

export const SubscriptionList = ({onSubscribe, onUnsubscribe}) => {
  const subscriptions = useSelector(state => state.subscriptions.subscriptions);

  if (!subscriptions.length)
    return null;

  return (
      <Container>
        {subscriptions.map(
            subscription => <SubscriptionCard onUnsubscribe={onUnsubscribe}
                                              onSubscribe={onSubscribe}
                                              key={subscription.id}
                                              subscription={subscription}/>)}
      </Container>
  );
};