import { useRoutes } from 'react-router-dom';
import useErrorRoutes from './errors.routes';
import useAuthRoutes from './auth.routes';
import useAuthenticatedRoutes from './private.routes';
import { useAuthContext } from '../contexts/auth.context';

export default function Router() {
  const { isAuthenticated } = useAuthContext();

  const errorRoutes = useErrorRoutes(isAuthenticated);
  const authenticatedRoutes = useAuthenticatedRoutes(isAuthenticated);
  const authRoutes = useAuthRoutes(isAuthenticated);

  return useRoutes([
    authRoutes,
    authenticatedRoutes,
    errorRoutes,
  ]);
}
