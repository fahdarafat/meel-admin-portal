import {
  Text,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  useDisclosure,
  FormControl,
  FormLabel,
  IconButton,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useRef, useState, useCallback } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';

import DatePicker from '~/lib/components/DatePicker';
import { ordersActions } from '~/store/orders';
import useAxios from '~/utils/useAxios';

import OrderListItem from './OrderListItem';

type OrdersProps = {
  orders: Order[];
};

const containerStyle = {
  width: '100%',
  height: '500px',
};

const Orders = ({ orders }: OrdersProps) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBvdXlgBN768nlSCYCY5YaXaefhgY65PXc',
  });
  const axios = useAxios();
  const dispatch = useDispatch();
  const formatDate = (dateString: string): string => {
    // Create a new Date object from the input string
    const date = new Date(dateString);

    // Define a helper function to pad single-digit numbers with a leading zero
    const pad = (num: number): string =>
      num < 10 ? `0${num}` : num.toString();

    // Format the date and time in the desired format
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
      date.getDate()
    )} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
      date.getSeconds()
    )}`;
  };

  const [map, setMap] = useState(null);
  const [newOrder, setNewOrder] = useState({
    shortAddress: '',
    timeWindow: ['2021-09-01 00:00:00', ''],
  });

  const handleShortAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewOrder({ ...newOrder, shortAddress: e.target.value.toUpperCase() });
  };
  const onSelectDate = (date: Date | undefined) => {
    if (date) {
      setNewOrder({
        ...newOrder,
        timeWindow: ['2021-09-01 00:00:00', formatDate(date.toISOString())],
      });
    }
  };

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);
  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: openModal,
    onClose: closeModal,
  } = useDisclosure();

  const btnRef = useRef<HTMLButtonElement>(null);
  const createOrder = async () => {
    const res = await axios.post('/orders/create_order/', {
      dropOffLocation: newOrder.shortAddress,
      timeStamp: newOrder.timeWindow,
    });
    dispatch(ordersActions.addOrder(res.data.order));
    onClose();
  };
  return (
    <>
      <Flex
        w="100%"
        p={3}
        color="black"
        shadow="xs"
        justify="space-between"
        align="center"
      >
        <Text fontWeight="bold" fontSize="sm">
          Orders
        </Text>
        <Button
          ref={btnRef}
          onClick={onOpen}
          rightIcon={<FaPlus />}
          size="xs"
          colorScheme="purple"
          aria-label="New order"
          title="New order"
        >
          New Order
        </Button>
      </Flex>
      <Tabs
        variant="enclosed-colored"
        colorScheme="purple"
        isFitted
        size="sm"
        defaultIndex={0}
      >
        <TabList>
          <Tab>All</Tab>
          <Tab>Assigned</Tab>
          <Tab>Unassigned</Tab>
        </TabList>

        <TabPanels>
          <TabPanel p="0">
            {orders.map((order, index) => (
              <OrderListItem
                key={order.orderId}
                order={order}
                isLast={index === orders.length - 1}
              />
            ))}
          </TabPanel>
          {/* <TabPanel p="0">
            {orders
              .filter((order) => order.status.toLowerCase() === 'assigned')
              .map((order, index) => (
                <OrderListItem
                  key={order.orderId}
                  order={order}
                  isLast={index === orders.length - 1}
                />
              ))}
          </TabPanel>
          <TabPanel p="0">
            {orders
              .filter((order) => order.status.toLowerCase() === 'unassigned')
              .map((order, index) => (
                <OrderListItem
                  key={order.orderId}
                  order={order}
                  isLast={index === orders.length - 1}
                />
              ))}
          </TabPanel> */}
        </TabPanels>
      </Tabs>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create New Order</DrawerHeader>

          <DrawerBody>
            <HStack align="end">
              <FormControl isRequired>
                <FormLabel>Short Address</FormLabel>
                <Input
                  placeholder="First name"
                  size="sm"
                  onChange={handleShortAddressChange}
                  value={newOrder.shortAddress}
                />
              </FormControl>
              <IconButton
                size="sm"
                colorScheme="blue"
                aria-label="Search database"
                icon={<FaLocationDot />}
                onClick={openModal}
              />
            </HStack>
            <DatePicker onSelect={(date) => onSelectDate(date)} />
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {isLoaded && (
                    <GoogleMap
                      onLoad={onLoad}
                      onUnmount={onUnmount}
                      center={{ lat: 23.7136, lng: 45.6753 }}
                      mapContainerStyle={containerStyle}
                      zoom={9}
                      options={{
                        streetViewControl: false,
                        fullscreenControl: false,
                        mapTypeControl: false,
                        zoomControl: false,
                      }}
                    >
                      <Marker
                        position={{ lat: 23.7136, lng: 45.6753 }}
                        options={{ draggable: true }}
                        onDragEnd={(e) => {
                          console.log(e.latLng?.lat(), e.latLng?.lng());
                        }}
                      />
                    </GoogleMap>
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={closeModal}>
                    Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={createOrder}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Orders;
