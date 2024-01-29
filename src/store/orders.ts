import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [
    {
      orderId: 1,
      latitude: '24.7370045,46.6805455',
      longitude: '24.7370045,46.6805455',
      shortAddress: 'RHOC2522',
      fullAddress: 'Riyadh, Riyadh Province, Saudi Arabia',
      timestampStart: '2021-01-01T10:00:00Z',
      timestampEnd: '2021-01-01T11:00:00Z',
    },
  ],
};
const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders(state, action) {
      return {
        ...state,
        orders: action.payload,
      };
    },
    addOrder(state, action) {
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    },
  },
});

export const ordersActions = ordersSlice.actions;

export default ordersSlice.reducer;
