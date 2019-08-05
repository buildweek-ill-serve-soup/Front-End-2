import React from 'react';

import Inventory from './Inventory.js';

const InventoryList=props=>{
    return(
        <ul>
            {props.data.map(data=>{
                return <Inventory data={data}/>;
            })}
        </ul>
    )
}
export default InventoryList;