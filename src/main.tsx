import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './stores/store';
import RootNavigation from './routes';
import { Provider } from 'react-redux';
import './styles/main.css';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  </React.StrictMode>,
);
