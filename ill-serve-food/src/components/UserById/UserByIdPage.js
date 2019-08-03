import React from 'react';
import UserByIdForm from './UserByIdForm';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';
import{userById}from'../../actions/userByIdAction.js';



class UserByIdPage extends React.Component{
    render(){
        const{userById}=this.props
        return(
            <div className='Login'>
                <UserByIdForm userById={userById}/>
               
            </div>
        )
    }
}
UserByIdPage.propTypes={
    userById: PropTypes.func.isRequired
}
export default connect(null,{userById})(UserByIdPage);