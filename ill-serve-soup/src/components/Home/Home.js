import React from 'react';
import {getData,createData}from '../../actions/getData';
import {connect}from 'react-redux';
import PropTypes from 'prop-types';
import HomeForm from './HomeForm';



class Home extends React.Component{
  
 render(){
  const {getData}=this.props
        return(
            <div>
                <HomeForm getData={getData}/>
            </div>
        )
    }
}
Home.propTypes={
  getData: PropTypes.func.isRequired,
}

  export default connect(
    
    null,
    {getData,createData}
  )(Home);