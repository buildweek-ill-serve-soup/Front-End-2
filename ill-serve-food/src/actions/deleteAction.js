import axios from "axios";
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from "../actions/index.js";

export function setCurrentUser(user){
    return{
        type:SET_CURRENT_USER,
        headers:[],
        user
    }
}

export function deleteUser(userData){
    return dispatch=>{
        
        return axios.delete(`https://kitchen-soup-backend.herokuapp.com/api/users/:id `, userData).then(res=>{
            const token=res.data.token;
            localStorage.setItem('jwtToken',token);
            setAuthorizationToken(token);
            let headers={Authorizaton:`Bearer${token}`,headers}
            dispatch(setCurrentUser(jwt.decode(token)));
        
    })
    
    }
}