import {
  Center,
  Text,
  Button,
  VStack,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';

const fleet = () => {
  const [fleetDetails, setFleetDetails] = useState([2]);
  const handleClick = () => {
    console.log('clicked');
  };
  return fleetDetails.length > 0 ? (
    <>
      <Flex>
        <Button colorScheme="blue" ms="auto" me="3">
          Add
        </Button>
      </Flex>
      <TableContainer height="100%">
        <Table size="md">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>info</Th>
              <Th isNumeric>multiply by</Th>
              <Th isNumeric>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr
              _hover={{ background: '#e5e5e5' }}
              cursor="pointer"
              onClick={handleClick}
            >
              <Td>inches</Td>
              <Td>millimeters (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>
                <Button colorScheme="blue">Edit</Button>
              </Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimeters (cm)</Td>
              <Td isNumeric>30.48</Td>
              <Td>
                <Button colorScheme="blue">Edit</Button>
              </Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
              <Td>
                <Button colorScheme="blue" textAlign="end">
                  Edit
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  ) : (
    <Center>
      <VStack>
        <Text fontWeight="bold" color="gray.200">
          No Data Available
        </Text>
        <Button colorScheme="blue">Add</Button>
      </VStack>
    </Center>
  );
};
export default fleet;
