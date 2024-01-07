import {
  Text,
  Box,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { useState } from 'react';

const TeamsTab = () => {
  const [teams, setTeams] = useState([]);
  return (
    <>
      <Box w="100%" p={3} color="black" shadow="xs">
        <Text fontWeight="bold" fontSize="sm">
          Teams
        </Text>
      </Box>
      <Tabs
        variant="enclosed-colored"
        colorScheme="purple"
        isFitted
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
    </>
  );
};
export default TeamsTab;
