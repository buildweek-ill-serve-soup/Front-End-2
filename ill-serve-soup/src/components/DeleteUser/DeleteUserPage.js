import React from 'react';
import DeleteUserForm from './DeleteUserForm';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';
import{deleteUser}from'../../actions/deleteAction.js';



class DeleteUserPage extends React.Component{
    render(){
        const{deleteUser}=this.props
        return(
            <div className='EditUser'>
                <DeleteUserForm deleteUser={deleteUser}/>
                
            </div>
        )
    }
}
DeleteUserPage.propTypes={
    deleteUser: PropTypes.func.isRequired
}
export default connect(null,{deleteUser})(DeleteUserPage);