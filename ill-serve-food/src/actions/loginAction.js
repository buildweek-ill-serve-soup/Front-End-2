import axios from "axios";

export function login(data){
    return dispatch=>{
        
        return axios.post('https://kitchen-soup-backend.herokuapp.com/api/users/login  ', data)
        
    }
    
}