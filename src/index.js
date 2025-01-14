import React from 'react';
import { createRoot } from 'react-dom/client'; // Importer depuis react-dom/client
import { Provider } from 'react-redux';
import store from './store/index';
import App from './component/App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
