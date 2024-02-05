import { Box, Button, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import type { RootState } from '~/store';
import { routesActions } from '~/store/route-optimization';
import useAxios from '~/utils/useAxios';

const Planning = () => {
  const myAxios = useAxios();
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders.orders);
  const routes = useSelector((state: RootState) => state.routes.routes);
  const drivers = useSelector((state: RootState) => state.drivers.drivers);
  const handleOptimizeRoute = () => {
    myAxios
      .post('route_optimization/optimize_route/', {
        orders: orders.map((order: Order) => order.orderId),
        drivers: drivers.map((driver: Driver) => driver.driverId),
      })
      .then(async (res) => {
        if (res.data.message === 'Route optimized successfully') {
          const optimizedRoute = await axios.get(
            `https://api.nextbillion.io/optimization/v2/result?id=${res.data.optimized_route.id}&key=99dad3c3587e42a08f8d8b5f8df66355`
          );
          dispatch(routesActions.addRoute(optimizedRoute.data));
          console.log(routes);
        }
      });
  };
  return (
    <Box justifyContent="flex-end">
      <VStack justify="flex-end">
        <Button colorScheme="blue" onClick={handleOptimizeRoute}>
          Optimize Route
        </Button>
      </VStack>
    </Box>
  );
};
export default Planning;
