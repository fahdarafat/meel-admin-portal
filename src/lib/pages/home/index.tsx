import { Box } from '@chakra-ui/react';
import '../../styles/resizable.css';
import { useState } from 'react';
import { ResizableBox } from 'react-resizable';

import Map from './components/Map';
import Orders from './components/Orders';
import TeamsTab from './components/TeamsTab';

const Home = () => {
  const headerHeight = 56;
  const [leftDrawerWidth, setLeftDrawerWidth] = useState(300);
  const [rightDrawerWidth, setRightDrawerWidth] = useState(300);
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
    <Box display="flex">
      {/* Left Drawer */}
      <ResizableBox
        width={leftDrawerWidth}
        height={Infinity}
        resizeHandles={['e']}
        maxConstraints={[window.innerWidth * 0.4, Infinity]}
        minConstraints={[300, Infinity]}
        onResize={handleResizeLeftDrawer}
      >
        <Box width={leftDrawerWidth}>
          <Orders />
        </Box>
      </ResizableBox>

      <Box
        flex="1"
        overflow="hidden"
        height={`calc(100vh - ${headerHeight}px)`}
      >
        <Map />
      </Box>

      <ResizableBox
        width={rightDrawerWidth}
        height={Infinity}
        resizeHandles={['w']}
        maxConstraints={[window.innerWidth * 0.4, Infinity]}
        minConstraints={[300, Infinity]}
        onResize={handleResizeRightDrawer}
      >
        <Box width={rightDrawerWidth}>
          {/* Left Drawer Content */}
          <TeamsTab />
        </Box>
      </ResizableBox>
    </Box>
  );
};

export default Home;
