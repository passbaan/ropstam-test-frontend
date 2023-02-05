import { Navigate } from 'react-router-dom';
import { NotFound } from '../components/errors';
import { ErrorLayout } from '../layouts';

export default function errorRoutes() {
  return {
    path: '*',
    element: <ErrorLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" replace /> },
    ],
  };
}
