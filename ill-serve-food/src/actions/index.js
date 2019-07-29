import axios from 'axios';

export const GET_DATA='GET_DATA';
export const GET_DATA_SUCCESS='GET_DATA_SUCCESS';
export const UPDATING_DATA='UPDATING_DATA';
export const UPDATE_DATA_SUCCESS='UPDATE_DATA_SUCCESS';
export const DELETEING_DATA='DELETING_DATA';
export const CREATING_DATA='CREATING_DATA';
export const CREATE_DATA='CREATE_DATA';
export const ERR='ERR';

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
export function loadInventory(){
  return(dispatch)=>{
    return axios.get('https://kitchen-soup-backend.herokuapp.com/api/users/items').then((response)=>{
      dispatch(showInventory(response.data))
    })
  }
}
export function showInventory(data){
  return{
    type:'SHOW_INVENTORY',
    data:data
  }
}