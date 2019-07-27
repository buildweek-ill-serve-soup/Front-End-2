import React from 'react';

class SignupForm extends React.Component{
    render(){
        return(
        <div>
                <div>
                    <h1>Join Now!</h1>
                </div>
                <div className="form-group">
                   <input type="text"name='username'className='form-controll'/>
                </div>
                <div className='form-group'>
                        <button>
                            Sign Up
                        </button>
                </div>
        </div>
        )
    }
}
export default SignupForm;