import React from 'react';
import{connect}from 'react-redux';

import InventoryList from '../components/Inventory/InventoryList.js';
import {getInventory}from'../actions/index.js';

class InventoryListView extends React.Component{
    componentDidMount(){
        this.props.getInventory();
    }
    render(){
        if (this.props.fetching){
            return <h2>Loading..</h2>;
        }
        return(
            <div className='InventoryWrapper'>
                <InventoryList data={this.props.data}/>
            </div>
        );
    }
}

const mapStateToProps=state=>{
    console.log('state',state.inventoryReducer.data)
    return{
        data:state.inventoryReducer.data,
        fetching:state.inventoryReducer.fetching,
    }
   
}
export default connect(mapStateToProps,{getInventory})(InventoryListView);