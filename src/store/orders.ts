import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [
    {
      id: 1,
      name: 'Order 1',
      status: 'ASSIGNED',
      assignedTo: null,
      pickupLocation: '24.7370045,46.6805455',
      dropoffLocation: '24.7370045,46.6805455',
      pickupTime: '2021-01-01T10:00:00Z',
      dropoffTime: '2021-01-01T11:00:00Z',
    },
    {
      id: 2,
      name: 'Order 2',
      status: 'UNASSIGNED',
      assignedTo: null,
      pickupLocation: '24.7756244,46.7432828',
      dropoffLocation: '24.7756244,46.7432828',
      pickupTime: '2021-01-02T10:00:00Z',
      dropoffTime: '2021-01-02T11:00:00Z',
    },
    {
      id: 3,
      name: 'Order 3',
      status: 'ASSIGNED',
      assignedTo: null,
      pickupLocation: '24.6563705,46.7679746',
      dropoffLocation: '24.6563705,46.7679746',
      pickupTime: '2021-01-03T10:00:00Z',
      dropoffTime: '2021-01-03T11:00:00Z',
    },
    {
      id: 4,
      name: 'Order 4',
      status: 'UNASSIGNED',
      assignedTo: null,
      pickupLocation: '24.8563705,44.7479746',
      dropoffLocation: '24.8563705,44.7479746',
      pickupTime: '2021-01-04T10:00:00Z',
      dropoffTime: '2021-01-04T11:00:00Z',
    },
  ],
};
const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders(state, action) {
      debugger;
      state.orders = action.payload;
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
