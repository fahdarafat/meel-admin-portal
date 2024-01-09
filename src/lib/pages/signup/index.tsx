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
import { useReducer, useEffect, useState } from 'react';
import { useNavigate, Link as ReactRouterLink } from 'react-router-dom';

import { useAuth } from '~/lib/Contexts/AuthContext';

type SignupProps = {
  email: string;
  password: string;
  confirmPassword: string;
};
const LoginPage: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [formData, setFormData] = useReducer(
    (state: SignupProps, newState: Partial<SignupProps>) =>
      ({ ...state, ...newState }) as SignupProps,
    { email: '', password: '', confirmPassword: '' }
  );
  const handleLogin = async (e: SyntheticEvent) => {
    // Handle login logic here
    e.preventDefault();
    auth.login(formData);
    navigate('/');
  };
  useEffect(() => {
    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  }, [formData.password, formData.confirmPassword]);
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
          <FormControl id="confirm-password">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              required
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ confirmPassword: e.target.value })}
            />
          </FormControl>
          {error && (
            <Box
              color="red.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="md"
              textAlign="center"
            >
              {error}
            </Box>
          )}
          <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
            Sign Up
          </Button>
          <Chakralink as={ReactRouterLink} to="/login">
            Already have an account? Login
          </Chakralink>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginPage;
