import React from 'react';

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
    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
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
export default SignupForm;