import React from 'react';
import SignupForm from './SignupForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import{userSignupRequest}from '../../actions/signupActions';
class SignupPage extends React.Component{
    render(){
        const{userSignupRequest}=this.props;
        return(
            <div>
                <SignupForm userSignupRequest={userSignupRequest}/>
            </div>
        )
    }
}

SignupPage.propTypes={
    userSignupRequest: PropTypes.func.isRequired
}
export default connect((state)=>{return{}},{userSignupRequest})(SignupPage);