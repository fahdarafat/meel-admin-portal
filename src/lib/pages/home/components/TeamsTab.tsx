import {
  Text,
  Box,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  ModalFooter,
  ModalCloseButton,
  ModalHeader,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import useAxios from '~/utils/useAxios';

const TeamsTab = () => {
  const axios = useAxios();
  const [driver, setDriver] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDriver(e.target.value);
  };
  const handleSaveDriver = async () => {
    try {
      const { data } = await axios.post('/drivers', { name: driver });
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      onClose();
    }
  };
  return (
    <>
      <Box w="100%" p={3} color="black" shadow="xs">
        <Flex justify="space-between">
          <Text fontWeight="bold" fontSize="sm">
            Teams
          </Text>
          <Button
            ref={btnRef}
            onClick={onOpen}
            rightIcon={<FaPlus />}
            size="xs"
            colorScheme="purple"
            aria-label="New Driver"
            title="New Driver"
          >
            New Driver
          </Button>
        </Flex>
      </Box>
      <Tabs
        variant="enclosed-colored"
        colorScheme="purple"
        isFitted
        size="sm"
        defaultIndex={0}
      >
        <TabList>
          <Tab>Drivers</Tab>
          <Tab>Teams</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>Drivers</p>
          </TabPanel>
          <TabPanel>
            <p>Teams</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Driver</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Driver Name</FormLabel>
              <Input
                placeholder="Driver Name"
                size="sm"
                onChange={handleInputChange}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              variant="outlined"
              onClick={onClose}
            >
              Close
            </Button>
            <Button colorScheme="blue" onClick={handleSaveDriver}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default TeamsTab;
