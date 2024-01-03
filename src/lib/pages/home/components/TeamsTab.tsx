import { Text, Box } from '@chakra-ui/react';
import { useState } from 'react';

const TeamsTab = () => {
  const [teams, setTeams] = useState([]);
  return (
    <Box bg="gray.50" w="100%" p={3} color="black" shadow="xs">
      <Text fontWeight="bold" fontSize="sm">
        Teams
      </Text>
    </Box>
  );
};
export default TeamsTab;
