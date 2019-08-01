import axios from 'axios';
//get
export const GETTING_DATA='GETTING_DATA';
export const GET_DATA_SUCCESS='GET_DATA_SUCCESS';
export const GET_DATA_FAILURE='GET_DATA_FAILURE';
//get
export const GETTING_USER='GETTING_USER';
export const GET_USER_SUCCESS='GET_USER_SUCCESS';
export const GET_USER_FAILURE='GET_USER_FAILURE';
//post
export const POST_NEW_USER='POST_NEW_USER';
export const POST_USER_FAILURE='POST_USER_FAILURE';
export const POST_USER_SUCCESS='POST_USER_SUCCESS';

export const DELETEING_DATA='DELETING_DATA';

export const CREATING_DATA='CREATING_DATA';
export const CREATE_DATA='CREATE_DATA';

export const ERR='ERR';
export const SHOW_INVENTORY='SHOW_INVENTORY';

const URL='https://kitchen-soup-backend.herokuapp.com'
//get all inventory 'still need to set up token'
export const getInventory=()=>dispatch=>{
  dispatch({type:GETTING_DATA});
  axios.get('https://kitchen-soup-backend.herokuapp.com/api/users/items')
       .then(response=>{
         console.log('res',response)
         dispatch({type:GET_DATA_SUCCESS,payload:response.data.results});
       })
       .catch(err=>{
         dispatch({type:GET_DATA_FAILURE,payload:err});
       })
}
//get all users'still need to set up token and this wont be used as is'
export const getUsers=()=>dispatch=>{
  dispatch({type:GETTING_USER});
  axios.get('https://kitchen-soup-backend.herokuapp.com/api/users')
       .then(response=>{
         console.log('res',response)
         dispatch({type:GET_USER_SUCCESS,payload:response.data.results});
       })
       .catch(err=>{
         dispatch({type:GET_USER_FAILURE,payload:err});
       })
}
//post user action
/*export const userSignup=user=>{
  const newUser=axios.post(`${URL}/api/users/register`,user)
  return dispatch=>{
    dispatch({type:POST_NEW_USER});
    newUser.then(({data})=>{
      dispatch({type:POST_USER_SUCCESS,payload:data});
    }).catch(err=>{
      dispatch({type:ERR,payload:err})
    });
  };
}*/






/*export const getData=()=>{
  const data=axios.get('https://kitchen-soup-backend.herokuapp.com/api/users/items');
    return dispatch=>{
      dispatch({type:SHOW_INVENTORY});
      data.then(response=>{
        dispatch ({type:GET_DATA_SUCCESS,payload:response.data})
      }).catch(err=>{
        dispatch({type:ERR,payload:err})
      })
    }
}*/

/*const URL='https://kitchen-soup-backend.herokuapp.com/api/users/items'
//get action type
export const getData=()=>{
  // axios getting data
  const data=axios.get(`${URL}`);
  return dispatch=>{
    //dispatching responding and catching
    dispatch({type:GET_DATA});
      data.then(response=>{
        dispatch({type:GET_DATA_SUCCESS,payload:response.data});
      }).catch(err=>{
        dispatch({type:ERR,payload:err})
      })
  };
};
// post action type
export const createData=data=>{
  //axios posting data
  const newData=axios.post(`${URL}`,data)
  return dispatch=>{
    //dispatching into payload
    dispatch({type:CREATING_DATA});
    newData.then(({data})=>{
      dispatch({type:CREATE_DATA,payload:data});
    }).catch(err=>{
      dispatch({type:ERR,payload:err})
    });
  };
}*/
