import React from 'react';
import PropTypes from 'prop-types';




class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            role:'',
            errors:{}
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    //typing inputs function
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    //submit user function 
    onSubmit(e){
        this.setState({errors:{}});
        e.preventDefault();
        console.log(this.props);
        this.props.userSignupRequest(this.state).then(
            ()=>{
                
            },
            ({data})=>this.setState({errors:data})
        );
       
       }
    
    render(){
        
        return(
        <form onSubmit={this.onSubmit}>
                <div>
                    <h1>Join Now!</h1>
                </div>
                <div className="form-group">
                   <input 
                        value={this.state.name}
                        onChange={this.onChange}
                        placeholder='name'
                        type="text"name='name'
                        className='form-control'/>
                    <input 
                        value={this.state.email}
                        onChange={this.onChange}
                        placeholder='Email'
                        type="text"name='email'
                        className='form-control'/>
                    <input 
                        value={this.state.password}
                        onChange={this.onChange}
                        placeholder='Password'
                        type="text"name='password'
                        className='form-control'/>
                    <input 
                        value={this.state.role}
                        onChange={this.onChange}
                        placeholder='Role'
                        type="text"name='role'
                        className='form-control'/>
                    
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