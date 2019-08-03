import React from 'react';
import PropTypes from 'prop-types';
import '../styling/LoginForm.css';


class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            password:'',
            errors:{}
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        this.setState({errors:{}});
        e.preventDefault();
        
        this.props.login(this.state).then(
            ()=>{
               this.context.router.push(`/${this.props.user.id}`) 
                
            },
            ({data})=>this.setState({errors:data})
        );
        
       
       }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
               <h1 className="Login">Welcome Back!</h1>
               <div className='Form'><input 
                        value={this.state.name}
                        onChange={this.onChange}
                        placeholder='Username'
                        type="text"name='name'
                        className='form-control'/>
                <input 
                        value={this.state.password}
                        onChange={this.onChange}
                        placeholder='Password'
                        type="text"name='password'
                        className='form-control'/>
                        </div>
                <div>
                    <button>
                        Login
                    </button>
                </div>
            </form>
        )
    }
}
LoginForm.propTypes={
    login: PropTypes.func.isRequired,
}

export default LoginForm;