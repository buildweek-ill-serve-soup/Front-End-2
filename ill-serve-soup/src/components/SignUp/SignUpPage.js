import React from 'react';
import SignUpForm from './SignUpForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createData} from '../../actions/getData';

class SignUpPage extends React.Component{
    render(){
        const {createData}=this.props;
        return(
            <div>
                <SignUpForm createData={createData}/>
            </div>
        )
    }
}
SignUpPage.propTypes={
    createData:PropTypes.func.isRequired
}
export default connect(null,{createData})(SignUpPage);