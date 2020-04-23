import React, { Component } from 'react';
import logo from './logo.svg';
import './Xcomp.css';
import Ycomp from './Ycomp';


class App extends Component{
  constructor(){
    super()
    this.state=({
      numOfYcomp:0,
      count:0
    })
  }
  addYcomp=()=>{
    var value =this.state.numOfYcomp;
    value=value+1;
    var increment=this.state.count+1;
    this.setState({
      numOfYcomp:value,
      count:increment
    })
  }
  
 
  render(){
    
      //show add button
      return(
        <div class=" fluid Xcomponent-parent">
        <div class=" back ">
        
           {this.state.numOfYcomp>0?<Ycomp idcount={this.state.count+1}/>:""}
           {this.state.numOfYcomp>1?<Ycomp idcount={this.state.count+1}/>:""}
           {this.state.numOfYcomp>1?
           "":<input class="button1"type="button" value="addYComponent" onClick={this.addYcomp}></input>}
          {/* </div> */}
          </div>
          </div>
        
     
    )
  }
}

export default App;
