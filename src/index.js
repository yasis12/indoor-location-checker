import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './componenets/App/App';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const storeInstance = createStore(
  combineReducers(
    {

    }
  ),
  applyMiddleware(
    logger
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);

export {storeInstance};
