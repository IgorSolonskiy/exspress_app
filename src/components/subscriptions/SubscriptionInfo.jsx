import {
  IconWrapper,
  InfoWrapper, SubscriptionActive, SubscriptionCancels, SubscriptionPlan,
  TextContainer, UpdateSubscription,
} from '../../styled/components/pages/Profile';
import {useSelector} from 'react-redux';

export const SubscriptionInfo = () => {
  const currentSubscription = useSelector(
      state => state.subscriptions.currentSubscription);

  if (!currentSubscription)
    return null;

  const cancelsSubscriptionDate = currentSubscription.cancel_at_period_end
      ?
      <SubscriptionCancels>
        Cancels {currentSubscription.current_period_end}
      </SubscriptionCancels>
      : '';

  const updateDataControl = currentSubscription.cancel_at_period_end
      ? 'No future invoices'
      : `Next invoice on ${currentSubscription.current_period_end} for $${currentSubscription.price}`;

  return (
      <InfoWrapper>
        <IconWrapper>
          <i className="far fa-clock"/>
        </IconWrapper>
        <TextContainer>
          <TextContainer><SubscriptionPlan>Pro</SubscriptionPlan><SubscriptionActive>Active</SubscriptionActive>{cancelsSubscriptionDate}
          </TextContainer>
          <TextContainer><UpdateSubscription>Billing
            monthly</UpdateSubscription>
            &#183;
            <UpdateSubscription>
              {updateDataControl}
            </UpdateSubscription>
          </TextContainer>
        </TextContainer>
      </InfoWrapper>
  );
};