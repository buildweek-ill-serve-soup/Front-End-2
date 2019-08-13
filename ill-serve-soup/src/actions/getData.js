import axios from 'axios';
import jwt from 'jsonwebtoken';

import jwtDecode from 'jwt-decode';

export const GET_DATA='GET_DATA';
export const GET_DATA_SUCCESS='GET_DATA_SUCCESS';
export const UPDATING_DATA='UPDATING_DATA';
export const UPDATE_DATA_SUCCESS='UPDATE_DATA_SUCCESS';
export const DELETEING_DATA='DELETING_DATA';
export const CREATING_DATA='CREATING_DATA';
export const CREATE_DATA='CREATE_DATA';
export const SET_CURRENT_USER='SET_CURRENT_USER';
export const LOGIN_FAILURE ='LOGIN_FAILURE';
export const LOGIN_SUCCESS ='LOGIN_SUCCESS';
export const LOGIN_REQUEST='LOGIN_REQUEST';
export const LOGOUT ='LOGOUT';
export const ERR='ERR';

const URL='https://kitchen-soup-backend.herokuapp.com'
//get action type
export function setCurrentUser(user){
  return{
      type:SET_CURRENT_USER,
      users:[],
      user
  }
}
export default function setAuthorizationToken(token){
  if(token){
      axios.defaults.headers.common['Authorization']=`Bearer ${token}`;
  }
  
}

/*export function getData(data){
  return dispatch=>{
    
    return axios.get('https://kitchen-soup-backend.herokuapp.com/api/users  ', data).then(res=>{
      response=>this.setState({users:response.data}).catch(error=>alert(error));
  })
    
  }
}*/

export const getData=()=>{
  // axios getting data
  const users=axios.get(`${URL}/api/users/`);
  return dispatch=>{
    //dispatching responding and catching
   
    dispatch({type:GET_DATA});
      users.then(response=>{
        dispatch({type:GET_DATA_SUCCESS,payload:response.users});
      }).catch(err=>{
        dispatch({type:ERR,payload:err})
      })
  };
};
//Post New User
export function createData(users){
  return dispatch=>{
      return axios.post('https://kitchen-soup-backend.herokuapp.com/api/users/register  ', users)
  }
}
//Login/logout Existing User


//login
/*export const login = credentials => {
  return dispatch => {
    dispatch({ type: LOGIN_REQUEST })
    
    axios.post('https://kitchen-soup-backend.herokuapp.com/api/users/login', credentials).then(res => {
      localStorage.authToken = res.data.token
      
      dispatch({
        type: LOGIN_SUCCESS,
        user: jwtDecode(res.data.token)
      })
    }).catch(res => {
      dispatch({
        type: LOGIN_FAILURE,
        errorMessage: res.data.error
      })
    })
  }
}*/



// post action type
/*export const userSignupRequest=users=>{
  //axios posting data
  const newUser=axios.post(`${URL}/api/users/register`,users)
  return dispatch=>{
    //dispatching into payload
    dispatch({type:CREATING_DATA});
    newUser.then(({users})=>{
      dispatch({type:CREATE_DATA,payload:users});
    }).catch(err=>{
      dispatch({type:ERR,payload:err})
    });
  };
}*/
