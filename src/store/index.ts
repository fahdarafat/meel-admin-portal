import { configureStore } from '@reduxjs/toolkit';

import driversReducer from './drivers';
import ordersReducer from './orders';
import routesReducer from './route-optimization';

export type RootState = {
  orders: {
    orders: Order[];
  };
  routes: {
    routes: OptimizedRoute[];
  };
  drivers: {
    drivers: Driver[];
  };
};
const store = configureStore({
  reducer: {
    orders: ordersReducer,
    routes: routesReducer,
    drivers: driversReducer,
  },
});

export default store;
