import React from 'react';
import{connect}from'react-redux';
import * as actionCreators from '../../actions/index.js';


class Home extends React.Component{
    
    render(){
        console.log(props)
        return(
            <div >
                {this.props.data}
            </div>
        )
    }
}
export default Home;