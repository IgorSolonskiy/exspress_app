import {
  setSubscriptions,
  setCurrentSubscription,
  setPaymentMethod,
  updateSubscription,
} from './reducer';
import {apiClient} from '../../libs/apiClient';
import {message} from 'antd';

export const getSubscriptionsAsync = () => async dispatch => {
  try {
    const {data: response} = await apiClient.get('subscriptions/price');

    return dispatch(setSubscriptions(response.data));
  } catch (e) {
    message.error('Internal server error.');
  }
};

export const getCurrentSubscriptionAsync = () => async dispatch => {
  try {
    const {data: response} = await apiClient.get('subscription');

    if (!response)
      return null;

    return dispatch(setCurrentSubscription(response));
  } catch (e) {
    message.error('Internal server error.');
  }
};

export const getPaymentMethodAsync = (id) => async dispatch => {
  try {
    const {data: response} = await apiClient.get(`payment_methods/${id}`);

    if (!response)
      return null;

    return dispatch(setPaymentMethod(response));
  } catch (e) {
    message.error('Internal server error.');
  }
};

export const deletePaymentMethodAsync = (id) => async dispatch => {
  try {
    await apiClient.delete(`payment_methods/${id}/detach`);

    return dispatch(setPaymentMethod(null));
  } catch (e) {
    message.error('Internal server error.');
  }
};

export const createPaymentMethodAsync = (
    id, payment_method, subscription_id) => async dispatch => {
  try {
    const {data: response} = await apiClient.post(
        `customer/${id}/payment_methods`, {payment_method, subscription_id});

    return dispatch(setPaymentMethod(response));
  } catch (e) {
    message.error('Internal server error.');
  }
};

export const updateSubscriptionAsync = (id, updatedData) => async dispatch => {
  try {
    await apiClient.put(`subscriptions/${id}/update`, updatedData);
    dispatch(updateSubscription(updatedData));
  } catch (e) {
    message.error('Internal server error.');
  }
};