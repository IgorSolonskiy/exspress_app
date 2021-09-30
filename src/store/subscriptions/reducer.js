import {createSlice} from '@reduxjs/toolkit';

const subscriptionSlice = createSlice({
  name: 'subscriptions',
  initialState: {
    subscriptions: [],
    currentSubscription: null,
  },
  reducers: {
    setSubscriptions(state, action) {
      state.subscriptions = [...action.payload];
    },
    setCurrentSubscription(state, action) {
      const name = action.payload.items.data[0].price.lookup_key;
      const status = action.payload.status;
      const cancel_at_period_end = action.payload.cancel_at_period_end;
      const current_period_end = action.payload.current_period_end;

      state.currentSubscription = {
        name,
        status,
        id: action.payload.id,
        cancel_at_period_end,
        current_period_end,
      };
    },
  },
});

export default subscriptionSlice.reducer;
export const {
  setSubscriptions,
  setCurrentSubscription,
} = subscriptionSlice.actions;