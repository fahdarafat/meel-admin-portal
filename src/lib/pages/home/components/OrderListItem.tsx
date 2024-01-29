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
      key={order.orderId}
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
            lat: +order.latitude as number,
            lng: +order.longitude as number,
          },
        } as any)
      }
    >
      <Flex justify="space-between" align="start">
        <Text fontWeight="bold" fontSize="sm">
          {order.shortAddress}
        </Text>
      </Flex>
      <Text fontSize="xs" color="gray.500">
        10:00 AM - 11:00 AM
      </Text>
    </Box>
  );
}

export default OrderListItem;
