import './Header.css';
import { Box, Flex, List, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  const pages = [
    { name: 'Home', path: '/', exact: true },
    { name: 'Fleet', path: '/fleet', exact: true },
    { name: 'Planning', path: '/planning', exact: true },
  ];
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
      bg="gray.50"
      p={2}
    >
      <Box flex="1">Meel Admin Portal</Box>
      <Box flex="1" display="flex" justifyContent="center">
        <List display="flex">
          {pages.map((page) => (
            <ListItem key={page.name} mx="10px">
              <NavLink
                to={page.path}
                className={({ isActive }) =>
                  ` ${isActive ? 'active' : ''} nav-link`
                }
              >
                {page.name}
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box marginLeft="auto" flex="1" display="flex" justifyContent="end">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
