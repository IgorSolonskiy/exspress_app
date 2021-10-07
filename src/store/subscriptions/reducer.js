import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment';

const subscriptionSlice = createSlice({
  name: 'subscriptions',
  initialState: {
    subscriptions: [],
    currentSubscription: null,
    paymentMethod: null,
  },
  reducers: {
    setSubscriptions(state, action) {
      state.subscriptions = [...action.payload];
    },
    setPaymentMethod(state, action) {
      state.paymentMethod = action.payload;
    },
    setCurrentSubscription(state, action) {
      state.currentSubscription = {
        name: action.payload.items.data[0].price.lookup_key,
        status: action.payload.status,
        id: action.payload.id,
        cancel_at_period_end: action.payload.cancel_at_period_end,
        current_period_end: moment(action.payload.current_period_end * 1000)
            .format('MMM DD'),
        payment_method: action.payload.default_payment_method,
        price: action.payload.items.data[0].price.unit_amount / 100,
        customer: action.payload.customer,
        item: action.payload.items.data[0].id,
      };
    },
    updateSubscription(state, action) {
      state.currentSubscription = {
        ...state.currentSubscription,
        cancel_at_period_end: action.payload.cancel_at_period_end,
      };
    },
  },
});

export default subscriptionSlice.reducer;
export const {
  setSubscriptions,
  setCurrentSubscription,
  setPaymentMethod,
  updateSubscription,
} = subscriptionSlice.actions;