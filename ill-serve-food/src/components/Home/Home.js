import React from 'react';
import{connect}from'react-redux';
import * as actionCreators from '../../actions/index.js';


class Home extends React.Component{
    
    render(){
        console.log(this.props)
        return(
            
            <div className="Wrap">
                
                {}
                <div className="Inventory">
                <button onClick={()=>{this.props.handleClick()}}>show inventory</button>
                </div>
            </div>
        )
    }
}
export default Home;