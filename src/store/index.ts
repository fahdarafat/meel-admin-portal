import { configureStore } from '@reduxjs/toolkit';

import ordersReducer from './orders';
import routesReducer from './route-optimization';

export type RootState = {
  orders: {
    orders: Order[];
  };
  routes: {
    routes: OptimizedRoute[];
  };
};
const store = configureStore({
  reducer: {
    orders: ordersReducer,
    routes: routesReducer,
  },
});

export default store;
