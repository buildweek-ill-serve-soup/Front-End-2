import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider}from'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware}from'redux';


import reducers from './reducers/index.js';
import App from './App.js';


const store=createStore(
  reducers,applyMiddleware(thunk)
);

ReactDOM.render(
      <Provider store={store}>
        <Router>
            <App/>
        </Router>
      </Provider>,
      document.getElementById('root'));

   
