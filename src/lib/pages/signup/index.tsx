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
  companyName: string;
  username: string;
  password1: string;
  password2: string;
};
const LoginPage: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [formData, setFormData] = useReducer(
    (state: SignupProps, newState: Partial<SignupProps>) =>
      ({ ...state, ...newState }) as SignupProps,
    { companyName: '', username: '', password1: '', password2: '' }
  );
  const handleSignup = async (e: SyntheticEvent) => {
    // Handle login logic here
    e.preventDefault();
    auth.signup({
      client_name: formData.companyName,
      username: formData.username,
      password1: formData.password1,
      password2: formData.password2,
    });
    navigate('/');
  };
  useEffect(() => {
    if (
      formData.password1 &&
      formData.password2 &&
      formData.password1 !== formData.password2
    ) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  }, [formData.password1, formData.password2]);
  return (
    <Box maxW="md" mx="auto" mt={60} p={7} shadow="lg" borderRadius="lg">
      <form onSubmit={handleSignup}>
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
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              required
              value={formData.username}
              onChange={(e) => setFormData({ username: e.target.value })}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              required
              value={formData.password1}
              onChange={(e) => setFormData({ password1: e.target.value })}
            />
          </FormControl>
          <FormControl id="confirm-password">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              required
              value={formData.password2}
              onChange={(e) => setFormData({ password2: e.target.value })}
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
