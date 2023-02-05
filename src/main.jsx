import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ApiProvider from './contexts/api.context';
import AuthProvider from './contexts/auth.context';
import Routes from './routes';
import './styles/main.scss';
//
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ApiProvider>
          <Routes />
        </ApiProvider>

      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
