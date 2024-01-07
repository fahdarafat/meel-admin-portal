import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '~/lib/Contexts/AuthContext';

type PrivateRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

const RequireAuth = ({
  children,
  redirectTo = '/login',
}: PrivateRouteProps) => {
  // add your own authentication logic here
  const context = useContext(AuthContext);
  const isAuthenticated = context.user;
  console.log('RequireAuth context: ', context);

  return isAuthenticated ? (
    (children as React.ReactElement)
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default RequireAuth;
