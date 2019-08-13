import { SET_CURRENT_USER } from "../actions/getData";
import isEmpty from 'lodash/isEmpty';
import jwt from 'jsonwebtoken';

const initialState = (token => ({
  isAuthenticating: false,
  currentUser: token ? jwt.decode(token) : null,
  errorMessage: null
}))(localStorage.authToken)

export const authReducer=(state=initialState,action)=>{
  switch(action.type){
    case SET_CURRENT_USER:
      return{
        isAuthenticated:!isEmpty(action.user),
        user:action.user
      }
    default:return state;
  }
}