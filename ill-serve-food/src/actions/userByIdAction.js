import axios from "axios";

export function userId(data){
    return dispatch=>{
        
        return axios.get('https://kitchen-soup-backend.herokuapp.com/api/users/:id  ', data)
        
    }
    
}