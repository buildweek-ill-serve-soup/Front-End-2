import isEmpty from 'lodash/isEmpty';
import Validator from 'validator';
import axios from 'axios';

export function validateInput(data){
    let errors={};
    if(Validator.isNull(data.email)){
        errors.email='Email is required';
    }
    if(Validator.isEmail(data.email)){
        errors.email='Email Taken'
    }
    if(Validator.isNull(data.username)){
        errors.username='Username is required';
    }

    if(Validator.isNull(data.password)){
        errors.password='Password is required';
    }
    if(Validator.isNull(data.passwordConfirmation)){
        errors.passwordConfirmation='Password is required';
    }
    if(!Validator.equals(data.password,data.passwordConfirmation)){
        errors.passwordConfirmation='Passwords Must Match';
    }
    return{
        errors,
        isValid: isEmpty(errors)
    }
}
 export function userSignupRequest(userData){

    return dispatch=>{
        return axios.post('/',(req,res)=>{
            const {erros,isValid}=validateInput(req.body);
            if(!isValid){
                res.status(400).json(erros);
            }
        })
    }
}

export function isValid(){
    const{errors,isaValid}= validateInput(this.state);
    if(!Valid){
        this.setState({errors});
    }
    return isValid;
}