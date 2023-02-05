import { Navigate } from 'react-router-dom';
import { Login, Register } from '../pages/auth';
import { AuthLayout } from '../layouts';

export default function privateRoutes(authenticated) {
  return {
    path: '/auth',
    element: !authenticated ? <AuthLayout /> : <Navigate to="/" replace />,
    children: [
      { element: <Navigate to="/auth/login" replace />, index: true },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  };
}
