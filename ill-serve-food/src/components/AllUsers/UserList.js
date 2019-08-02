import React from 'react';

import Users from './Users.js';

const UsersList=props=>{
    return(
        <ul>
            {props.data.map(data=>{
                return <Users data={data}/>;
            })}
        </ul>
    )
}
export default UsersList;