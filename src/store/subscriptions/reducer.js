import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment';
import {showError} from '../../helpers/exceptions/apiError';
import {
  createPaymentMethodAsync,
  deletePaymentMethodAsync,
  getCurrentSubscriptionAsync,
  getPaymentMethodAsync,
  getSubscriptionsAsync, setPaymentMethod, updateSubscriptionAsync,
} from './action';

const subscriptionSlice = createSlice({
  name: 'subscriptions',
  initialState: {
    subscriptions: [],
    currentSubscription: null,
    paymentMethod: null,
  },
  extraReducers: {
    [getSubscriptionsAsync.fulfilled]: (state, action) => {
      state.subscriptions = [...action.payload];
    },
    [getSubscriptionsAsync.rejected]: showError,
    [getCurrentSubscriptionAsync.fulfilled]: (state, action) => {
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
    [getCurrentSubscriptionAsync.rejected]: showError,
    [getPaymentMethodAsync.fulfilled]: (state, action) => {
      state.paymentMethod = action.payload;
    },
    [getPaymentMethodAsync.rejected]: showError,
    [deletePaymentMethodAsync.fulfilled]: setPaymentMethod,
    [deletePaymentMethodAsync.rejected]: showError,
    [createPaymentMethodAsync.fulfilled]: setPaymentMethod,
    [createPaymentMethodAsync.rejected]: showError,
    [createPaymentMethodAsync.fulfilled]: setPaymentMethod,
    [createPaymentMethodAsync.rejected]: showError,
    [updateSubscriptionAsync.fulfilled]: (state, action) => {
      state.currentSubscription = {
        ...state.currentSubscription,
        cancel_at_period_end: action.payload.cancel_at_period_end,
      };
    },
    [updateSubscriptionAsync.rejected]: showError,
  }
});

export default subscriptionSlice.reducer;