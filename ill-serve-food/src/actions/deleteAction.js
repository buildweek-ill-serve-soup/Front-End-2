import axios from "axios";

export function deleteUser(userData){
    return dispatch=>{
        
        return axios.delete(`https://kitchen-soup-backend.herokuapp.com/api/users/:id `, userData)
        
    }
    
}