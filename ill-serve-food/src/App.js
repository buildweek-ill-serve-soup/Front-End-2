import React from 'react';

import { Route } from 'react-router-dom';
import Home from './components/Home/Home';

import NavigationBar from './components/Navigation.js';
import SignupPage from './components/SignUp/SignupPage';
import LoginPage from './components/Login/LoginPage';
import DeleteUserPage from './components/DeleteUser/DeleteUserPage';
import UserByIdPage from './components/UserById/UserByIdPage';
import UsersList from './components/AllUsers/UserList';
import{InventoryListView}from'./views';
import UserByIdListView from'./views/userByIdListView';
import EditUserPage from './components/EditUser/EditUserPage.js';


class App extends React.Component{
  
  render(){
    
    return(
      <div>
        <NavigationBar/>
        <Route exact path='/editUser'component={EditUserPage}/>
        <Route exact path='/deleteUser'component={DeleteUserPage}/>
        <Route exact path='/userById'component={UserByIdPage}/>
        <Route exact path='/allUsers'component={UsersList}/>
        <Route exact path='/'component={Home}/>
        <Route path='/signup'component={SignupPage}/>
        <Route path='/login'component={LoginPage}/>
        <Route path='./inventory'component={InventoryListView}/>
        <Route path='./editUser'component={EditUserPage}/>
        <Route path='./deleteUser'component={DeleteUserPage}/>
      </div>
    )
  }
}
export default App;



