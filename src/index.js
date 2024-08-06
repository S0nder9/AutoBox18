import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/Store';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename = "/">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
