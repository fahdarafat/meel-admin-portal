import {
  Center,
  Text,
  Box,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  return (
    <>
      <Box w="100%" p={3} color="black" shadow="xs">
        <Text fontWeight="bold" fontSize="sm">
          Orders
        </Text>
      </Box>
      <Tabs
        variant="enclosed-colored"
        colorScheme="purple"
        isFitted
        defaultIndex={0}
      >
        <TabList>
          <Tab>All</Tab>
          <Tab>Assigned</Tab>
          <Tab>Unassigned</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
export default Orders;
