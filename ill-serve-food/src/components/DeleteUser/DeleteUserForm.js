import React from 'react';
import PropTypes from 'prop-types';


class DeleteUserForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            password:'',
            role:'',
            email:'',
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
        
        this.props.editUser(this.state).then(
            ()=>{
                
                
            },
            ({data})=>this.setState({errors:data})
        );
        
       
       }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div>
                    <h1>Delete Info</h1>
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
                            Delete Account
                        </button>
                </div >
        </form>
        )
    }
}
DeleteUserForm.propTypes={
    deleteUser: PropTypes.func.isRequired,
}

export default DeleteUserForm;