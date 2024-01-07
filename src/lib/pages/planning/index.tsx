import { Center, Text, Button, VStack } from '@chakra-ui/react';

const planning = () => {
  return (
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
export default planning;
