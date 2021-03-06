import Cards from 'react-credit-cards';
import {useDispatch, useSelector} from 'react-redux';
import {
  CardDataItem,
  CardDataWrapper, CardWrapper,
  Container, Wrapper,
} from '../../styled/components/cards/PaymentCard';
import {deletePaymentMethodAsync} from '../../store/subscriptions/action';
import {DetachPaymentModal} from '../modals/DetachPaymentModal';

export const InfoPaymentCard = () => {
  const paymentMethod = useSelector(state => state.subscriptions.paymentMethod);
  const dispatch = useDispatch();

  const handleDetachPaymentMethod = () =>{
    dispatch(deletePaymentMethodAsync(paymentMethod.id))
  }

  if (!paymentMethod)
    return null;

  const month = paymentMethod.card.exp_month < 10 ? '0' +
      paymentMethod.card.exp_month : paymentMethod.card.exp_month;

  return (
      <Container>
        <h1>Payment methods</h1>
        <Wrapper>
          <CardWrapper>
            <CardDataWrapper>
              <CardDataItem>Name</CardDataItem>
              <CardDataItem>{paymentMethod.billing_details.name}</CardDataItem>
            </CardDataWrapper>
            <CardDataWrapper>
              <CardDataItem>Number</CardDataItem>
              <CardDataItem>**** {paymentMethod.card.last4}</CardDataItem>
            </CardDataWrapper>
            <CardDataWrapper>
              <CardDataItem>Expires</CardDataItem>
              <CardDataItem>{month} / {paymentMethod.card.exp_year}</CardDataItem>
            </CardDataWrapper>
            <CardDataWrapper>
              <CardDataItem>Type</CardDataItem>
              <CardDataItem>{paymentMethod.card.brand} {paymentMethod.card.funding} {paymentMethod.type}</CardDataItem>
            </CardDataWrapper>
            <CardDataWrapper>
              <CardDataItem>Phone</CardDataItem>
              <CardDataItem>{paymentMethod.billing_details.phone || 'No phone provided'}</CardDataItem>
            </CardDataWrapper>
            <CardDataWrapper>
              <CardDataItem>Email</CardDataItem>
              <CardDataItem>{paymentMethod.billing_details.email}</CardDataItem>
            </CardDataWrapper>
            <DetachPaymentModal onDetachPaymentMethod={handleDetachPaymentMethod} type="primary" style={{marginTop:'15px'}} />
          </CardWrapper>
          <Cards
              preview={true}
              issuer={'visa'}
              number={`**** **** **** ${paymentMethod.card.last4}`}
              name={paymentMethod.billing_details.name}
              expiry={`${month}/${paymentMethod.card.exp_year}`}
              cvc={1}
          />
        </Wrapper>
      </Container>
  );
};