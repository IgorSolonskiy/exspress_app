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
      const name = action.payload.items.data[0].price.lookup_key;
      const status = action.payload.status;
      const cancel_at_period_end = action.payload.cancel_at_period_end;
      const current_period_end = moment(action.payload.current_period_end * 1000).format("MMM DD");
      const payment_method = action.payload.default_payment_method;
      const price = action.payload.items.data[0].price.unit_amount / 100

      state.currentSubscription = {
        name,
        status,
        id: action.payload.id,
        cancel_at_period_end,
        current_period_end,
        payment_method,
        price
      };
    },
  },
});

export default subscriptionSlice.reducer;
export const {
  setSubscriptions,
  setCurrentSubscription,
  setPaymentMethod
} = subscriptionSlice.actions;