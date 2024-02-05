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
  Icon,
} from '@chakra-ui/react';
import { IoIosSettings, IoIosLogOut } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

import { useAuth } from '~/lib/Contexts/AuthContext';

// import ThemeToggle from './ThemeToggle';

const Header = () => {
  const auth = useAuth();
  const pages = [
    { name: 'Control Tower', path: '/', exact: true },
    { name: 'Plan', path: '/fleet', exact: true },
    { name: 'Execute', path: '/planning', exact: true },
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
              <MenuItem
                onClick={() => auth.logout()}
                justifyContent="space-between"
              >
                Logout
                <IoIosLogOut />
              </MenuItem>
              <MenuItem justifyContent="space-between">
                Settings
                <IoIosSettings />
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      )}
    </Flex>
  );
};

export default Header;
