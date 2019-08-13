import React from 'react';
import EditUserForm from './EditUserForm';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';
import{editUser}from'../../actions/editAction.js';



class EditUserPage extends React.Component{
    render(){
        const{editUser}=this.props
        return(
            <div className='EditUser'>
                <EditUserForm editUser={editUser}/>
                
            </div>
        )
    }
}
EditUserPage.propTypes={
    editUser: PropTypes.func.isRequired
}
export default connect(null,{editUser})(EditUserPage);