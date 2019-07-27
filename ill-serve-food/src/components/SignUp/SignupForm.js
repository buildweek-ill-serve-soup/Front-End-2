import React from 'react';
import PropTypes from 'prop-types';



class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password:'',
            passwordConfirmation:'',
            state:''
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    /*validateInput(data){
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
      userSignupRequest(userData){
    
        return dispatch=>{
            return axios.post('/',(req,res)=>{
                const {erros,isValid}=validateInput(req.body);
                if(!isValid){
                    res.status(400).json(erros);
                }
            })
        }
    }
    
    isValid(){
        const{errors,isaValid}= validateInput(this.state);
        if(!Valid){
            this.setState({errors});
        }
        return isValid;
    }*/
    onSubmit(e){
        e.preventDefault();
       if(this.isValid()){
           this.setState({errors:{},isLoading:true});
           this.props.userSignupRequest(this.state).then(
               ()=>{},
               ({data})=>this.setState({errors:data,isLoading:false})
           );
       }
    }
    render(){
        return(
        <form onSubmit={this.onSubmit}>
                <div>
                    <h1>Join Now!</h1>
                </div>
                <div className="form-group">
                   <input 
                        value={this.state.username}
                        onChange={this.onChange}
                        placeholder='Username'
                        type="text"name='username'
                        className='form-controll'/>
                    <input 
                        value={this.state.email}
                        onChange={this.onChange}
                        placeholder='Email'
                        type="text"name='email'
                        className='form-controll'/>
                    <input 
                        value={this.state.password}
                        onChange={this.onChange}
                        placeholder='Password'
                        type="text"name='password'
                        className='form-controll'/>
                    <input 
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange}
                        placeholder='Confirm Password'
                        type="text"name='passwordConfirmation'
                        className='form-controll'/>
                    <input 
                        value={this.state.state}
                        onChange={this.onChange}
                        placeholder='State'
                        type="text"name='state'
                        className='form-controll'/>
                </div>
                <div className='form-group'>
                        <button >
                            Sign Up
                        </button>
                </div >
        </form>
        )
    }
}

SignupForm.propTypes={
    userSignupRequest: PropTypes.func.isRequired,
}
export default SignupForm;