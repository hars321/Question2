import React, { Component } from 'react';
import logo from './logo.svg';
import './Ycomp.css';


class App extends Component{
    constructor(props){
        super(props);
        this.state=({
            idcount:0
        })
    }
    getId=()=>{
        var id=this.state.idcount+1;
        this.setState.idcount=({
            idcount:id
        })
        return id
    }
  render(){
      
    return(
      <div class="  Ycomponent-parent">

      
    <input type="text" class="yinput"id={this.state.idcount}/> 
    
    </div>
    )
  }
}

export default App;
