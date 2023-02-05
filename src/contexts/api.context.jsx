import { createContext, useContext, useMemo } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ls } from '../util';

const API_URL = 'http://localhost:3200';

const instance = axios.create({
  baseURL: import.meta.VITE_API_URL || API_URL,
  timeout: 30000,
});

instance.defaults.headers.Accept = 'application/json';
instance.interceptors.request.use(
  (config) => {
    const token = ls('get:token');

    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err),
);
instance.interceptors.response.use(
  (response) => response,
  (err) => {
    const { response } = err;
    if (response) {
      return response;
    }
    return err;
  },
);

const apiContext = createContext({
  api: null,
  updateApi: () => { },
});

export const useApiContext = () => useContext(apiContext);

function ApiProvider({ children }) {
  const value = useMemo(() => ({
    api: instance,
  }));
  //
  return (
    <apiContext.Provider value={value}>
      {children}
    </apiContext.Provider>
  );
}
ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiProvider;
