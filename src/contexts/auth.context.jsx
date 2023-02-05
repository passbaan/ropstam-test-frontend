import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';
import { useAuth } from '../hooks';

const authContext = createContext({
  user: null,
  token: null,
  login: null,
  logout: null,
  isAuthenticated: false,
});

export const useAuthContext = () => useContext(authContext);

function AuthProvider({ children }) {
  const auth = useAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
