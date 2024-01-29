import { Box, Flex } from '@chakra-ui/react';
import '../../styles/resizable.css';
import { useSelector } from 'react-redux';
import { ResizableBox } from 'react-resizable';

import type { RootState } from '../../../store/index'; // Import RootState and OptimizedRoute from the appropriate location

import Map from './components/Map';
import Orders from './components/Orders';
import TeamsTab from './components/TeamsTab';

const Home = () => {
  const headerHeight = 56;
  const leftDrawerWidth = 300;
  const rightDrawerWidth = 300;

  const orders = useSelector((state: RootState) => state.orders.orders);
  const routes = useSelector((state: RootState) => state.routes.routes);
  return (
    <Box
      display="flex"
      overflow="hidden"
      height={`calc(100vh - ${headerHeight}px)`}
    >
      <Map orders={orders} routes={routes}>
        <Flex justify="space-between" height="100%">
          <ResizableBox
            width={leftDrawerWidth}
            height={Infinity}
            resizeHandles={['e']}
            maxConstraints={[window.innerWidth * 0.4, Infinity]}
            minConstraints={[300, Infinity]}
          >
            <Box bg="white" height="100%">
              <Orders orders={orders} />
            </Box>
          </ResizableBox>
          <ResizableBox
            width={rightDrawerWidth}
            height={Infinity}
            resizeHandles={['w']}
            maxConstraints={[window.innerWidth * 0.4, Infinity]}
            minConstraints={[300, Infinity]}
          >
            <Box bg="white" height="100%">
              <TeamsTab />
            </Box>
          </ResizableBox>
        </Flex>
      </Map>
    </Box>
  );
};

export default Home;
