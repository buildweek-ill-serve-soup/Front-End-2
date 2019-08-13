import{GETTING_DATA,
       GET_DATA_SUCCESS,
       GET_DATA_FAILURE,
       GETTING_USER,
       GET_USER_FAILURE,
       GET_USER_SUCCESS,
       GET_USER_BY_ID,
       GET_USER_BY_ID_FAIL,
      GET_USER_BY_ID_SUCCESS} from '../actions/index.js';


const initialState={
    data:[],
    users:[],
    fetching:false,
    error:null
}
export const inventoryReducer=(state=initialState,action)=>{
    switch(action.type){
        case GETTING_DATA:
            return{...state,fetching:true};
        case GET_DATA_SUCCESS:
            return{...state,fetching:false,data:[...state.data,...action.payload]};
        case GET_DATA_FAILURE:
            return{...state,fetching:false,error:action.payload};
        default:
            return state;
    }
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      // Fill me in with the important reducers
      // action types should be FETCHING, SUCCESS and FAILURE
      // your switch statement should handle all of these cases.
      case GETTING_USER:
        return{...state,fetching:true};
      case GET_USER_SUCCESS:
        return{...state,fetching:false,characters:[...state.users,...action.payload]};
      case GET_USER_FAILURE:
        return{...state,fetching:false,error:action.payload};
      default:
        return state;
    }
  };
  export const userByIdReducer = (state = initialState, action) => {
    switch (action.type) {
      // Fill me in with the important reducers
      // action types should be FETCHING, SUCCESS and FAILURE
      // your switch statement should handle all of these cases.
      case GET_USER_BY_ID:
        return{...state,fetching:true};
      case GET_USER_BY_ID_SUCCESS:
        return{...state,fetching:false,characters:[...state.users,...action.payload]};
      case GET_USER_BY_ID_FAIL:
        return{...state,fetching:false,error:action.payload};
      default:
        return state;
    }
  };