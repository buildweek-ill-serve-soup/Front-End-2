import React from 'react';
import './styling/Navigation.css'

class NavigationBar extends React.Component{
    render(){
        return(
            <div className="WholeNav">
                <div className="NavContainer">
                    <a className="Nav" href='/'>Home</a>
                </div> 
                <div className="NavContainer">
                    <a className="Nav" href='/signup'>Sign Up</a>
                </div> 
                <div className="NavContainer">
                    <a className="Nav" href='/login'>Login</a>
                </div>
            </div>
        )
    }

}
export default NavigationBar;