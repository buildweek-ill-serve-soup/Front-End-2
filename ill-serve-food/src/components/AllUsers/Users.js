import React from 'react';
import UserList from './UserList';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';
import{allUsers}from'../../actions/allUsersAction';



class Users extends React.Component{
    render(){
        const{allUsers}=this.props
        return(
            <div className='allUsers'>
                <UserList allUsers={allUsers}/>
               
            </div>
        )
    }
}
Users.propTypes={
    allUsers: PropTypes.func.isRequired
}
export default connect(null,{allUsers})(Users);