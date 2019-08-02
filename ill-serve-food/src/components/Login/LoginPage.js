import React from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';
import{login}from'../../actions/loginAction.js';



class LoginPage extends React.Component{
    render(){
        const{login}=this.props
        return(
            <div className='Login'>
                <LoginForm login={login}/>
                <div className="NavContainer">
                    <a className="Nav" href='/inventory'>view inventory</a>
                </div>
                <div className="NavContainer">
                    <a className="Nav" href='/editUser'>Edit User Information</a>
                </div>
                <div className="NavContainer">
                    <a className="Nav" href='/userById'>user by id</a>
                </div>
                <div className="NavContainer">
                    <a className="Nav" href='/deleteUser'>Delete User</a>
                </div>
                <div className="NavContainer">
                    <a className="Nav" href='/all users'>all users</a>
                </div>
            </div>
        )
    }
}
LoginPage.propTypes={
    login: PropTypes.func.isRequired
}
export default connect(null,{login})(LoginPage);