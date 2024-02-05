import { Box, Flex, Text } from '@chakra-ui/react';

type DriverProps = {
  driver: Driver;
};

function DriverListItem({ driver }: DriverProps) {
  return (
    <Box>
      <Flex justify="space-between" align="start">
        <Text fontWeight="bold" fontSize="sm">
          {driver.driverName}
        </Text>
      </Flex>
    </Box>
  );
}

export default DriverListItem;
