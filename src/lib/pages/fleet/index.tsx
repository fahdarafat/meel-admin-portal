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
  Tfoot,
  Tbody,
  Container,
} from '@chakra-ui/react';
import { useState } from 'react';

const fleet = () => {
  const [fleetDetails, setFleetDetails] = useState([2]);
  const handleClick = () => {
    console.log('clicked');
  };
  return fleetDetails.length > 0 ? (
    <Container maxW="container.xl">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr
              _hover={{ background: '#e5e5e5' }}
              cursor="pointer"
              onClick={handleClick}
            >
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Container>
  ) : (
    <Center>
      <VStack>
        <Text fontWeight="bold" color="gray.500">
          No Data Available
        </Text>
        <Button colorScheme="blue">Add</Button>
      </VStack>
    </Center>
  );
};
export default fleet;
