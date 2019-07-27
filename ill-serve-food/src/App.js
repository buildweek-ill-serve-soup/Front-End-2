import React from 'react';
import NavigationBar from './components/Navigation.js';
import SignupPage from './components/SignUp/SignupPage';
import { Route ,withRouter } from 'react-router-dom';
import Home from './components/Home/Home';


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
export default App;

