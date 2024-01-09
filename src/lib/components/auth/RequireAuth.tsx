import { Navigate } from 'react-router-dom';

import { useAuth } from '~/lib/Contexts/AuthContext';

type PrivateRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

const RequireAuth = ({
  children,
  redirectTo = '/login',
}: PrivateRouteProps) => {
  // add your own authentication logic here
  const auth = useAuth();
  const isAuthenticated = auth.user;
  console.log('RequireAuth context: ', auth);

  return isAuthenticated ? (
    (children as React.ReactElement)
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default RequireAuth;
