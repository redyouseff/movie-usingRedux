import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from 'react-bootstrap';
import App from './App';
import { store } from './redux/store/store.js';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
        <App />
  </Provider>

 
);


