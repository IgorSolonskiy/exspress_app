import {setSubscriptions, setCurrentSubscription, setPaymentMethod} from './reducer';
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
  } catch (e) {
    message.error('Internal server error.');
  }
};

export const unsubscribeAsync = (id) => async dispatch => {
  try {
   await apiClient.delete(`payment_methods/${id}/detach`);
  } catch (e) {
    message.error('Internal server error.');
  }
};