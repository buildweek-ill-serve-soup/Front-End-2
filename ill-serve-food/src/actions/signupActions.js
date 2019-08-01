import axios from "axios";

export function userSignupRequest(userData){
    return dispatch=>{
        return axios.post('https://kitchen-soup-backend.herokuapp.com/api/users/register  ', userData)
    }
}