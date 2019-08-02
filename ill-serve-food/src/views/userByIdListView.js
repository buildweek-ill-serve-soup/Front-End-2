import React from 'react';
import{connect}from 'react-redux';

import UserList from '../components/AllUsers/UserList.js';
import {getUsersById}from'../actions/index.js';

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
        data:state.userByIdReducer.data,
        fetching:state.userByIdReducer.fetching,
        
    }
   
}
export default connect(mapStateToProps,{getUsersById})(UserByIdListView);