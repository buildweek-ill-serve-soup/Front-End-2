import React from 'react';
import PropTypes from 'prop-types';


class EditUserForm extends React.Component{
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
                
                    <h1>Edit Info</h1>
                
                
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
                    
               
                <div className='form-group'>
                        <button >
                            Save Changes
                        </button>
                </div >
        </form>
        )
    }
}
EditUserForm.propTypes={
    editUser: PropTypes.func.isRequired,
}

export default EditUserForm;