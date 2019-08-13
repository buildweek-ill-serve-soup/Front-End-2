import axiosInstance from "axios";


export function userById(){
    let userId;
    axiosInstance.get('https://kitchen-soup-backend.herokuapp.com/api/users').then(response=>{
        if(response.status===200&&response.data){
            userId=this.state.user_id;
            this.getUserById(`https://kitchen-soup-backend.herokuapp.com/api/${userId}`);
        }
    }).catch(error=>{});
}
export function getUserById(url){
    axiosInstance.get(url).then(response=>{

    }).catch(error=>{
        console.log(error)
    })
}
/*export function userId(data){
    return dispatch=>{
        
        return axios.get(`https://kitchen-soup-backend.herokuapp.com/api/users/${id}  `, data)
        
    }
    
}*/