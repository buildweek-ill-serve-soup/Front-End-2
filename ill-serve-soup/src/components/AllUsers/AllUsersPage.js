import React from 'react';
import AllUsersForm from './AllUsersForm';
import PropTypes from 'prop-types';
import{connect}from'react-redux';
import{allUsers}from'../../actions/allUsersAction';

class AllUsersPage extends React.Component{
    render(){
        const{allUsers}=this.props
        return(
            <div>
                <AllUsersForm allUsers={allUsers}/>
            </div>
        )
    }
}
AllUsersPage.propTypes={
    allUsers:PropTypes.func.isRequired
}
export default connect(null,{allUsers})(AllUsersPage);