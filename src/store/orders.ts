import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
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
