import axios from "axios";
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from "../actions/getData";

export function setCurrentUser(user){
    return{
        type:SET_CURRENT_USER,
        
        user,
        
    }
}
export function login(data){
    return dispatch=>{
        //const token=res.data.token
        //return axios({method:'post',url:'https://kitchen-soup-backend.herokuapp.com/api/users/login',headers:{Authorizaton:`Bearer${token}`}})
        return axios.post('https://kitchen-soup-backend.herokuapp.com/api/users/login  ', data).then(res=>{
            const token=res.data.token;
            localStorage.setItem('jwtToken',token);
            setAuthorizationToken(token);
            console.log(jwt.decode(token));
            dispatch(setCurrentUser(jwt.decode(token)));
    }) 
        
    }
    
}