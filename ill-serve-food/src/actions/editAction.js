import axios from "axios";

export function editUser(userData){
    return dispatch=>{
        
        return axios.put(`https://kitchen-soup-backend.herokuapp.com/api/users/:id `, userData)
        
    }
    
}