import axios from "axios";
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from "../actions/getData";

export function setCurrentUser(user){
    return{
        type:SET_CURRENT_USER,
        
        user
    }
}

export function deleteUser(user){
    return dispatch=>{
        
        return axios.delete(`https://kitchen-soup-backend.herokuapp.com/api/users/:id `, user).then(res=>{
            const token=res.data.token;
            localStorage.setItem('jwtToken',token);
            setAuthorizationToken(token);
            let headers={Authorizaton:`Bearer${token}`}
            dispatch(setCurrentUser(jwt.decode(token)));
        
    })
    
    }
}