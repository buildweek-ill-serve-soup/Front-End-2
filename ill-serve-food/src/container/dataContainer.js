import React from 'react';
import {connect}from'react-redux';
import * as actionCreators from '../actions/index.js';

import Home from '../components/Home/Home.js';

class DataCon extends React.Component{
    render(){
        return(
            <Home  ></Home>
        )
    }
}
const mapStateToProps=(state)=>{
    return state
}
export default connect(mapStateToProps,actioncreators)(DataCon);