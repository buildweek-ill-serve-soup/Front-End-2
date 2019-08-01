import React from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';
import{login}from'../../actions/loginAction.js';


class LoginPage extends React.Component{
    render(){
        return(
            <div className='Login'>
                <LoginForm login={login}/>
            </div>
        )
    }
}
LoginPage.propTypes={
    login: PropTypes.func.isRequired
}
export default connect(null,{login})(LoginPage);