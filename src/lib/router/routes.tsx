import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

const Home = React.lazy(() => import('~/lib/pages/home'));
const Fleet = React.lazy(() => import('~/lib/pages/fleet'));
const Planning = React.lazy(() => import('~/lib/pages/planning'));
const Login = React.lazy(() => import('~/lib/pages/login'));
const Signup = React.lazy(() => import('~/lib/pages/signup'));

export const routes: Array<PathRouteProps> = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/fleet',
    element: <Fleet />,
  },
  {
    path: '/planning',
    element: <Planning />,
  },
];
