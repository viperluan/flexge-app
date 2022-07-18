import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/store';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <CookiesProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CookiesProvider>
  </Provider>
);
