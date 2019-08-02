import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Users from './Users';


class UsersList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            users:{},
            errors:{}
        }
        
    }
      
   

    render(){
        return(
           
               
           <div>
           <Users allUsers={this.state.name} />;
            </div>
            
        )
    }
}
UsersList.propTypes={
    allUsers: PropTypes.func.isRequired,
}
function mapStateToProps(state){
    const {users}=state
    return{usersList:state.name}
}


export default connect(mapStateToProps)(UsersList);


