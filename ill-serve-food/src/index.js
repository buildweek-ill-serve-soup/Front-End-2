import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {dataReducer} from'./reducers/dataReducer.js';
// calling middleware
const store = createStore(
  dataReducer,
  applyMiddleware(thunk,logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

   
