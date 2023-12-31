import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link as Chakralink,
} from '@chakra-ui/react';
import type React from 'react';
import type { SyntheticEvent } from 'react';
import { useReducer } from 'react';
import { useNavigate, Link as ReactRouterLink } from 'react-router-dom';

import { useAuth } from '~/lib/Contexts/AuthContext';

type LoginProps = {
  email: string;
  password: string;
};
const LoginPage: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useReducer(
    (state: LoginProps, newState: Partial<LoginProps>) =>
      ({ ...state, ...newState }) as LoginProps,
    { email: '', password: '' }
  );
  const handleLogin = async (e: SyntheticEvent) => {
    // Handle login logic here
    e.preventDefault();
    auth.login(formData);
    navigate('/');
  };

  return (
    <Box maxW="md" mx="auto" mt={60} p={7} shadow="lg" borderRadius="lg">
      <form onSubmit={handleLogin}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ email: e.target.value })}
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
            Don't have an account? Sign Up
          </Chakralink>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginPage;
