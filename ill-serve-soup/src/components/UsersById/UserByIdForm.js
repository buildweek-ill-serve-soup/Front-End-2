import React from 'react';
import PropTypes from 'prop-types';


class UserByIdForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            password:'',
            role:'',
            email:'',
            id:'',
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
        
        this.props.userById(this.state).then(
            ()=>{
                
                
            },
            ({data})=>this.setState({errors:data})
        );
        
       
       }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
               <h1>Find User</h1>
               <input 
                        value={this.state.userById}
                        onChange={this.onChange}
                        placeholder='User Id'
                        type="text"name='userId'
                        className='form-control'/>
                
                <div>
                    <button>
                        Find User
                    </button>
                </div>
            </form>
        )
    }
}
UserByIdForm.propTypes={
    userById: PropTypes.func.isRequired,
}

export default UserByIdForm;