import React from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';
import{login}from'../../actions/loginAction.js';
import {InventoryListView} from '../../views';


class LoginPage extends React.Component{
    render(){
        const{login}=this.props
        return(
            <div className='Login'>
                <LoginForm login={login}/>
                <div className="NavContainer">
                    <a className="Nav" href='/inventory'>view inventory</a>
                </div>
            </div>
        )
    }
}
LoginPage.propTypes={
    login: PropTypes.func.isRequired
}
export default connect(null,{login})(LoginPage);