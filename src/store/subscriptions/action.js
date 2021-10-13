import {apiClient} from '../../libs/apiClient';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const setPaymentMethod = (state, action) => {
  state.paymentMethod = action.payload;
};

export const getSubscriptionsAsync = createAsyncThunk(
    'subscriptions/getSubscriptionsAsync',
    async (_, {rejectWithValue}) => {
      try {
        const {data: response} = await apiClient.get('subscriptions/price');

        return response.data;
      } catch (e) {
        return rejectWithValue(e?.response?.data?.message);
      }
    },
);

export const getCurrentSubscriptionAsync = createAsyncThunk(
    'subscriptions/getCurrentSubscriptionAsync',
    async (_, {rejectWithValue,}) => {
      try {
        const {data: response} = await apiClient.get('subscription');

        return response;
      } catch (e) {
        return rejectWithValue(e?.response?.data?.message);
      }
    },
);

export const getPaymentMethodAsync = createAsyncThunk(
    'subscriptions/getPaymentMethodAsync',
    async (id, {rejectWithValue}) => {
      try {
        const {data: response} = await apiClient.get(`payment_methods/${id}`);

        if (!response)
          return null;

        return response;
      } catch (e) {
        return rejectWithValue(e?.response?.data?.message);
      }
    },
);

export const deletePaymentMethodAsync = createAsyncThunk(
    'subscriptions/deletePaymentMethodAsync',
    async (id, {rejectWithValue}) => {
      try {
        await apiClient.delete(`payment_methods/${id}/detach`);

        return null;
      } catch (e) {
        return rejectWithValue(e?.response?.data?.message);
      }
    },
);

export const createPaymentMethodAsync = createAsyncThunk(
    'subscriptions/createPaymentMethodAsync',
    async ({payment_method, currentSubscription}, {rejectWithValue}) => {
      try {
        const {data: response} = await apiClient.post(
            `customer/${currentSubscription.customer}/payment_methods`,
            {payment_method, subscription_id: currentSubscription.id});

        return response;
      } catch (e) {
        return rejectWithValue(e?.response?.data?.message);
      }
    },
);

export const updateSubscriptionAsync = createAsyncThunk(
    'subscriptions',
    async ({id, updatedData}, {rejectWithValue}) => {
      try {
        const {data: response} = await apiClient.put(
            `subscriptions/${id}/update`,
            updatedData);

        return response;
      } catch (e) {
        return rejectWithValue(e?.response?.data?.message);
      }
    },
);