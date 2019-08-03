import React from 'react';

import PropTypes from 'prop-types';




class Users extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            role:'',
            errors:{}
        }
    }
    render(){
        
        return(
            <div className='allUsers'>
                All Users
               {this.props.name}
            </div>
        )
    }
}
Users.propTypes={
    allUsers: PropTypes.func.isRequired
}
export default Users;