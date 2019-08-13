import React from 'react';
import{connect}from 'react-redux';

import UserList from '../components/AllUsers/UserList.js';
import {userById}from'../actions/userByIdAction';

class UserByIdListView extends React.Component{
    componentDidMount(){
        this.props.getUsersById();
    }
    render(){
        if (this.props.fetching){
            return <h2>Loading..</h2>;
        }
        return(
            <div className='UserWrapper'>
                <UserList data={this.props.data}/>
            </div>
        );
    }
}

const mapStateToProps=state=>{
    
    return{
        data:state.data,
        fetching:state.fetching,
        
    }
   
}
export default connect(mapStateToProps,{userById})(UserByIdListView);