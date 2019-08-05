import React from 'react';
import {Link}from'react-router-dom';
import{connect}from'react-redux';
import PropTypes from 'prop-types';
import './Styling/Navigation.css';


class NavigationBar extends React.Component{
    render(){
        
        const {isAuthenticated}=this.props.authReducer;
        const userLinks=(
            <ul className="NavList">
            <li className='IndividualLink'><Link to='/'>Logg Out</Link></li>
            <li className='IndividualLink'><Link to='/allUsers'>All Users</Link></li>
            <li className='IndividualLink'><Link to='/signup'>Sign Up</Link></li>
            <li className='IndividualLink'><Link to='/login'>Logg In</Link></li>
            <li className='IndividualLink'><Link to='/editUser'>Edit User</Link></li>
            <li className='IndividualLink'><Link to='/deleteUser'>Delete User</Link></li>
            <li className='IndividualLink'><Link to='/userById'>User By Id </Link></li>
            </ul>
        );
        const guestLinks=(
            <ul>
            <li><Link to='/signup'>Sign Up</Link></li>
            <li><Link to='/login'>Logg In</Link></li>
            </ul>
        );
        return(
            <nav>
                <div>
                    <div>
                        {isAuthenticated?userLinks:guestLinks}
                    </div>
                </div>
            </nav>
        )
    }
}
NavigationBar.propTypes={
    authReducer: PropTypes.object.isRequired
}
function mapStateToProps(state){
    return{
       authReducer:state.authReducer
    }
}
export default connect(mapStateToProps)(NavigationBar);