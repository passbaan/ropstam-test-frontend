import { Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts';
import { Categories } from '../pages/categories';
import { Cars } from '../pages/cars';

export default function privateRoutes(authenticated) {
  return {
    path: '/',
    element: authenticated ? <MainLayout /> : <Navigate to="/auth/login" replace />,
    children: [
      { element: <Navigate to="/cars" replace />, index: true },
      { path: 'categories', element: <Categories /> },
      { path: 'cars', element: <Cars /> },
    ],
  };
}
