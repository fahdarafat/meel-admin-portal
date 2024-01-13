import axios from 'axios';
import dayjs from 'dayjs';
import { jwtDecode } from 'jwt-decode';

import { useAuth } from '~/lib/Contexts/AuthContext';

const baseURL = 'http://127.0.0.1:8000';

const useAxios = () => {
  const { authTokens, setUser, setAuthTokens } = useAuth();

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${authTokens?.token}` },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const token = jwtDecode(authTokens.token);
    const isExpired = dayjs.unix(token.exp as number).diff(dayjs()) < 1;

    if (!isExpired) return req;

    const response = await axios.post(`${baseURL}/api/token/refresh/`, {
      refresh: authTokens.refreshToken,
    });

    localStorage.setItem('authTokens', JSON.stringify(response.data));

    setAuthTokens({ token: response.data.access });

    req.headers.Authorization = `Bearer ${response.data.access}`;
    return req;
  });

  return axiosInstance;
};

export default useAxios;
