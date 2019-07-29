import React from 'react';
import{connect}from'react-redux';
import * as actionCreators from './actions/index.js';
import { Route ,withRouter } from 'react-router-dom';
import Home from './components/Home/Home';

import NavigationBar from './components/Navigation.js';
import SignupPage from './components/SignUp/SignupPage';


class App extends React.Component{
  
  render(){
    
    return(
      <div>
        <NavigationBar/>
        <Route exact path='/'component={Home}/>
        <Route path='/signup'component={SignupPage}/>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return state
};
// i thought this would add the props of atleast the inventory items to my app but i dont think it is
export default connect (mapStateToProps,actionCreators)(App);

