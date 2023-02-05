import { useEffect, useState } from 'react';
import { ls } from '../util/index';

const useAuth = () => {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const t = ls('get:token');
    setToken(t);
    setIsAuthenticated(!!t);
  }, []);

  const logout = () => {
    ls('clear');
    setToken(null);
    setIsAuthenticated(false);
  };

  const login = (t) => {
    ls('set:token', t);
    setToken(t);
    setIsAuthenticated(true);
  };

  return {
    token,
    login,
    logout,
    isAuthenticated,
  };
};
export default useAuth;
