import React from 'react';
import PropTypes from 'prop-types';



class HomeForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            token:'',
            errors:{}
        }
       this.onSubmit=this.onSubmit.bind(this);
    }
    onSubmit(e){
        this.setState({errors:{}});
        e.preventDefault();
        
        this.props.getData(this.state).then(
            ()=>{
               
                
            },
            ({data})=>this.setState({errors:data})
        );
    }
   
        
        
       
       
    render(){
        return(
         <form>
             <h1>Show All Users</h1>
             <div className='Form'>
                {this.state.email}
             </div>
         </form>
        )
    }
}
HomeForm.propTypes={
    getData: PropTypes.func.isRequired,
}

export default HomeForm;