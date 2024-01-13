import axios from 'axios';
import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);
const baseURL = 'http://127.0.0.1:8000';
type UserDetails = {
  username?: string;
  password1?: string;
  password2?: string;
} | null;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [authTokens, setAuthTokens] = useState({
    token: null,
    refreshToken: null,
  });
  const login = async (userDetails: UserDetails) => {
    try {
      const response = await axios.post(`${baseURL}/api/signin/`, userDetails);
      const { access_token, refresh_token } = response.data;
      setAuthTokens({ token: access_token, refreshToken: refresh_token });
      setUser(userDetails as UserDetails);
    } catch (error) {
      console.log(error);
    }
  };
  const signup = async (userDetails: UserDetails) => {
    try {
      const response = await axios.post(`${baseURL}/api/signup/`, userDetails);
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, authTokens }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
