import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider}from'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware}from'redux';
import jwt from 'jsonwebtoken';



import  reducers from './reducers';
import App from './App.js';
import setAuthorizationToken from './utils/setAuthorizationToken.js';
import { setCurrentUser } from './actions/authActions.js';
import authReducer from './reducers/authReducer';

const store=createStore(
  (authReducer),applyMiddleware(thunk)
  
);
if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}
setAuthorizationToken(localStorage.jwtToken);

ReactDOM.render(
      <Provider store={store}>
        <Router>
            <App/>
        </Router>
      </Provider>,
      document.getElementById('root'));

   
