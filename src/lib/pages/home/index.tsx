import { Box } from '@chakra-ui/react';
import '../../styles/resizable.css';
import { useState } from 'react';
import { ResizableBox } from 'react-resizable';

import Map from './components/Map';
import Orders from './components/Orders';
import TeamsTab from './components/TeamsTab';

const Home = () => {
  const [leftDrawerWidth, setLeftDrawerWidth] = useState(250);
  const [rightDrawerWidth, setRightDrawerWidth] = useState(250);
  const handleResizeLeftDrawer = (
    event: React.SyntheticEvent,
    { size }: { size: { width: number; height: number } }
  ) => {
    setLeftDrawerWidth(size.width);
  };
  const handleResizeRightDrawer = (
    event: React.SyntheticEvent,
    { size }: { size: { width: number; height: number } }
  ) => {
    setRightDrawerWidth(size.width);
  };
  return (
    <Box display="flex" height="100vh">
      {/* Left Drawer */}
      <ResizableBox
        width={leftDrawerWidth}
        height={Infinity}
        resizeHandles={['e']}
        maxConstraints={[window.innerWidth * 0.4, Infinity]}
        minConstraints={[200, Infinity]}
        onResize={handleResizeLeftDrawer}
      >
        <Box width={leftDrawerWidth} height="100%" bg="gray.50">
          <Orders />
        </Box>
      </ResizableBox>

      <Box flex="1" overflow="hidden">
        <Map />
      </Box>

      <ResizableBox
        width={rightDrawerWidth}
        height={Infinity}
        resizeHandles={['w']}
        maxConstraints={[window.innerWidth * 0.4, Infinity]}
        minConstraints={[200, Infinity]}
        onResize={handleResizeRightDrawer}
      >
        <Box width={rightDrawerWidth} height="100vh" bg="gray.50">
          {/* Left Drawer Content */}
          <TeamsTab />
        </Box>
      </ResizableBox>
    </Box>
  );
};

export default Home;
