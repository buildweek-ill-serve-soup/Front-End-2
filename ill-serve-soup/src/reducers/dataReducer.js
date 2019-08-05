import {GET_DATA,
        GET_DATA_SUCCESS,
        CREATING_DATA,
        CREATE_DATA,
        SET_CURRENT_USER,
        ERR} from '../actions/getData.js';




const initialState={
  payload:{},
  fetchingData:false,
  addingData:false,
  updatingData:false,
  deletingData:false,
  error:null
}

export const dataReducer=(state=initialState,action)=>{
  switch(action.type){
    //unpack
    case GET_DATA:
      return{...state,fetchingData:true};
    case GET_DATA_SUCCESS:
      return{...state,data:action.payload,fetchingData:false};
    case CREATING_DATA:
      return{...state,addingData:true};
    case CREATE_DATA:
      return{...state,data:action.payload,addingData:false}
    case ERR:
      return{...state,gettingFriends:false,creatingFriend:false,deletingFriend:false,updatingFriend:false,err:action.payload};
      default:
        return state;
  }
}