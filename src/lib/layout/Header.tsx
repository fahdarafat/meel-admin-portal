import './Header.css';
import {
  Box,
  Flex,
  List,
  ListItem,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { useAuth } from '~/lib/Contexts/AuthContext';

// import ThemeToggle from './ThemeToggle';

const Header = () => {
  const auth = useAuth();
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
      p={2}
    >
      <Box flex="1">
        <Text fontSize="xl" fontWeight="bold">
          Meel
        </Text>
      </Box>
      {auth?.user && (
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
      )}
      {auth?.user && (
        <Box marginLeft="auto" flex="1" display="flex" justifyContent="end">
          <Menu>
            <MenuButton>
              <Avatar name={auth.user?.email} size="sm" />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => auth.logout()}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      )}
    </Flex>
  );
};

export default Header;
