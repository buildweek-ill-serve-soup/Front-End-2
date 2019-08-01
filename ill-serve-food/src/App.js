import React from 'react';
import{connect}from'react-redux';
import * as actionCreators from './actions/index.js';
import { Route ,withRouter } from 'react-router-dom';
import Home from './components/Home/Home';

import NavigationBar from './components/Navigation.js';
import SignupPage from './components/SignUp/SignupPage';
import LoginPage from './components/Login/LoginPage';
import{InventoryListView}from'./views';


class App extends React.Component{
  
  render(){
    
    return(
      <div>
        <NavigationBar/>
        
        <Route exact path='/'component={Home}/>
        <Route path='/signup'component={SignupPage}/>
        <Route path='/login'component={LoginPage}/>
      </div>
    )
  }
}
export default App;



