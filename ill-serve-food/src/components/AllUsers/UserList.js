import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Users from './Users';
import{allUsers}from'../../actions/allUsersAction';


class UsersList extends React.Component{
  render(){
        const{allUsers}=this.props
        
        return(
           
               
           <div>
           <Users allUsers={allUsers} />;
            </div>
            
        )
    }
}
UsersList.propTypes={
    allUsers: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired
}




export default connect(null,{allUsers})(UsersList);


