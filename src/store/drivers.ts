import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drivers: [],
};
const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    setDrivers(state, action) {
      return {
        ...state,
        drivers: action.payload,
      };
    },
    addDriver(state, action) {
      return {
        ...state,
        drivers: [...state.drivers, action.payload],
      };
    },
  },
});

export const driverActions = driversSlice.actions;

export default driversSlice.reducer;
