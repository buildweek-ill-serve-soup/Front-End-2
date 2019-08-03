import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore}from'react-router-redux';
import {Provider}from'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware,compose}from'redux';
import jwt from 'jsonwebtoken';



import rootReducer from './reducers/index.js';
import App from './App.js';
import setAuthorizationToken from './utils/setAuthorizationToken.js';
import { setCurrentUser } from './actions/authActions.js';

const defaultState={
  data:{}
}
const store=createStore(
  (rootReducer),defaultState,applyMiddleware(thunk)
  
);

if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}
setAuthorizationToken(localStorage.jwtToken);


ReactDOM.render(
      <Provider store={store}>
        
        <Router >
            <App/>
        </Router>
      </Provider>,
      document.getElementById('root'));

   
