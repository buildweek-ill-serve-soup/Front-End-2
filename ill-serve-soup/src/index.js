import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from'./reducers/index';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import {setCurrentUser}from './actions/authAction';
import {BrowserRouter as Router} from 'react-router-dom';
// calling middleware
const store = createStore(
  rootReducer,
  compose(
  applyMiddleware(thunk,logger),
  window.devToolsExtension ? window.devToolsExtension():f=>f
  )
  );
  if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwt);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
  }

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

   
