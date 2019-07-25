import {GET_DATA,GET_DATA_SUCCESS,CREATING_DATA,CREATE_DATA,ERR} from '../actions/getData.js';




const initialState={
  data:[],
  fetchingData:false,
  addingData:false,
  updatingData:false,
  deletingData:false,
  error:null
}

export const dataReducer=(state=initialState,actiion)=>{
  switch(actiion.type){
    //unpack
    case GET_DATA:
      return{...state,fetchingData:true};
    case GET_DATA_SUCCESS:
      return{...state,data:actiion.payload,fetchingData:false};
    case CREATING_DATA:
      return{...state,addingData:true};
    case CREATE_DATA:
      return{...state,data:actiion.payload,addingData:false}
    case ERR:
      return{...state,gettingFriends:false,creatingFriend:false,deletingFriend:false,updatingFriend:false,err:actiion.payload};
      default:
        return state;
  }
}