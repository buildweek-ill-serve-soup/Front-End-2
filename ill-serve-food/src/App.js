import React,{Component}from 'react';
import {getData,createData}from './actions/getData.js';
import {connect}from 'react-redux';

import Home from './components/Home/Home';


class App extends Component{
  state={
    data:[]
  }
 componentDidMount(){
   console.log(this.props);
   this.props.getData()
 }
  render(){
    return(
      <div className="App">
        <div className="Nav">
          <div className="Data">
          <ul>
            {this.props.data.map(res=>{
              console.log(res);
              return(
              <div >
                <li>{res}</li>    
              </div>
        );
      })}
    </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps=state=>{
  console.log(state)
  return{
    data:state.data
  };
}
export default connect(
  mapStateToProps,
  {getData,createData}
)(App);

