import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { useGoogleMap } from '@react-google-maps/api';
import { FaMapMarker } from 'react-icons/fa';

type OrderProps = {
  order: Order;
  isLast: boolean;
};

function OrderListItem({ order, isLast }: OrderProps) {
  const map = useGoogleMap();
  const handleMarkerClick = (e: google.maps.KmlMouseEvent) => {
    if (map && e.latLng) {
      (map as google.maps.Map).panTo(e.latLng);
    }
  };
  return (
    <Box
      key={order.id}
      w="100%"
      px={3}
      py={1}
      color="black"
      borderWidth="1px"
      borderLeft="none"
      borderRight="none"
      borderBottom={isLast ? 'none' : '1px solid'}
      borderTop="none"
      cursor="pointer"
      _hover={{ bg: 'gray.50' }}
      borderColor="gray.200"
      onClick={() =>
        handleMarkerClick({
          latLng: {
            lat: +order.dropoffLocation.split(',')[0] as number,
            lng: +order.dropoffLocation.split(',')[1] as number,
          },
        } as any)
      }
    >
      <Flex justify="space-between" align="start">
        <Text fontWeight="bold" fontSize="sm">
          {order.name}
        </Text>
        <Icon
          as={FaMapMarker}
          mt="1"
          color={
            order.status.toLowerCase() === 'assigned' ? 'green.600' : 'red.600'
          }
        />
      </Flex>
      <Text fontSize="xs" color="gray.500">
        10:00 AM - 11:00 AM
      </Text>
    </Box>
  );
}

export default OrderListItem;
