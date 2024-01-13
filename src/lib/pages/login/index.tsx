import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Link as Chakralink,
} from '@chakra-ui/react';
import type React from 'react';
import type { SyntheticEvent } from 'react';
import { useReducer } from 'react';
import { useNavigate, Link as ReactRouterLink } from 'react-router-dom';

import { useAuth } from '~/lib/Contexts/AuthContext';

type LoginProps = {
  companyName: string;
  userName: string;
  password: string;
};
const LoginPage: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useReducer(
    (state: LoginProps, newState: Partial<LoginProps>) =>
      ({ ...state, ...newState }) as LoginProps,
    { companyName: '', userName: '', password: '' }
  );
  const handleLogin = async (e: SyntheticEvent) => {
    // Handle login logic here
    e.preventDefault();
    if (auth) {
      auth.login({
        client_name: formData.companyName,
        username: formData.userName,
        password: formData.password,
      });
    }
    navigate('/');
  };

  return (
    <Box maxW="md" mx="auto" mt={60} p={7} shadow="lg" borderRadius="lg">
      <form onSubmit={handleLogin}>
        <Stack spacing={4}>
          <FormControl id="company-name">
            <FormLabel>Company Name</FormLabel>
            <Input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ companyName: e.target.value })}
            />
          </FormControl>
          <FormControl id="user-name">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              required
              value={formData.userName}
              onChange={(e) => setFormData({ userName: e.target.value })}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ password: e.target.value })}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
            Sign In
          </Button>
          <Chakralink as={ReactRouterLink} to="/signup">
            <Text>Don&apos;t have an account? Sign Up</Text>
          </Chakralink>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginPage;
