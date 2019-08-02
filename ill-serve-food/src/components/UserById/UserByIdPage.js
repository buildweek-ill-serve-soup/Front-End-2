import React from 'react';
import UserByIdForm from './UserByIdForm';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';
import{userId}from'../../actions/userByIdAction.js';



class UserByIdPage extends React.Component{
    render(){
        const{userId}=this.props
        return(
            <div className='Login'>
                <UserByIdForm userId={userId}/>
               
            </div>
        )
    }
}
UserByIdPage.propTypes={
    userId: PropTypes.func.isRequired
}
export default connect(null,{userId})(UserByIdPage);