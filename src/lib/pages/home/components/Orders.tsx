import { Center, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  return (
    <Box bg="gray.50" w="100%" p={3} color="black" shadow="xs">
      <Text fontWeight="bold" fontSize="sm">
        Orders
      </Text>
    </Box>
  );
};
export default Orders;
