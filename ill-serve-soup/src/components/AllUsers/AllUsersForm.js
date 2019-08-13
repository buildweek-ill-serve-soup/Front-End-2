import React from 'react';
import PropTypes from 'prop-types';

class AllUsersForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            password:'',
            role:'',
            email:'',
            errors:{}
        }
        this.onSubmit=this.onSubmit.bind(this);
    }
    onSubmit(e){
        this.setState({errors:{}});
        e.preventDefault();
        this.props.allUsers(this.state).then(
            ()=>{

            },
            ({data})=>this.setState({errors:data})
        );
    }
    render(){
        return(
            <div >
                <div>{this.state.name}</div>
                <button onClick={this.onSubmit}>All Users</button>
            </div>
        )
    }
}
AllUsersForm.propTypes={
    allUsers:PropTypes.func.isRequired,
}
export default AllUsersForm;