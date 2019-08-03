import axios from "axios";

export function allUsers(data){
    return dispatch=>{
        
        return axios.get('https://kitchen-soup-backend.herokuapp.com/api/users  ', data).then(res=>{
          
        })
        
    }
    
}