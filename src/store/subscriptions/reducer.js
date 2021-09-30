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

      state.currentSubscription = {
        name, status,id: action.payload.id
      };
    },
  },
});

export default subscriptionSlice.reducer;
export const {
  setSubscriptions,
  setCurrentSubscription,
} = subscriptionSlice.actions;