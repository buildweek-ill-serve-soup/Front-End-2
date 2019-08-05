import React,{Component}from 'react';


import Home from './components/Home/Home';
import SignUpPage from './components/SignUp/SignUpPage';
import LoginPage from './components/Login/LoginPage';
import NavigationBar from './components/NavigationBar';
import EditUserPage from './components/EditUser/EditUserPage';
import AllUsersPage from './components/AllUsers/AllUsersPage';
import DeleteUserPage from './components/DeleteUser/DeleteUserPage';
import UserByIdPage from './components/UsersById/UserByIdPage';
import InventoryList from './components/Inventory/InventoryList';
import {getData,createData}from './actions/getData';
import {connect}from 'react-redux';
import {Route}from'react-router-dom';
import {authReducer} from './reducers/authReducer';


class App extends Component{
  componentDidMount(){
    console.log(this.props);
    this.props.getData()
  }

  render(){
    
    return(
      <div className="App">
        <div className="Nav">
          <div className="Data">
          <ul>
          
              
              <div >
                <NavigationBar/>
                <Route exact path='/userById'component={UserByIdPage}/>
                <Route exact path='/deleteUser'component={DeleteUserPage}/>
                <Route exact path='/editUser'component={EditUserPage}/>
                <Route exact path='/signup'component={SignUpPage}/>
                <Route exact path='/login'component={LoginPage}/>
                <Route exact path ='/allUsers'component={AllUsersPage }/>    
              </div>
        
    </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps=state=>{
  console.log(state)
  return{
    data:state.data
  };
}
export default connect(
  mapStateToProps,
  {getData,createData}
)(App);

