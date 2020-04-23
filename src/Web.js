import React, { Component } from 'react';
import Xcomp from './Xcomp'
    
class App extends Component{
    constructor(){
        super()
        var arr=[];
        this.state=({
            numOfXcomp:0,
            
          })
    }
    addXcomp=()=>{
        var value=this.state.numOfXcomp;
        value=value+1;
        this.setState({
            numOfXcomp:value,

        })
        console.log(this.state.numOfXcomp)
    }
    submit=()=>{
        var y1=document.getElementsByClassName("yinput")[0].value;
        var y2=document.getElementsByClassName("yinput")[1].value;
        var y3=document.getElementsByClassName("yinput")[2].value;
        var y4=document.getElementsByClassName("yinput")[3].value;
        var content=JSON.stringify({
            "x1":{
                "y1":y1,
            "y2":y2
            },
            "x2":{
                "y3":y3,
                "y4":y4
            }
            
        })
        
        console.log(content);
        document.getElementById("ans").innerHTML=content
    }
    
    render(){

        {
            
                return(
                    <div class="text-center">
                        
                        {this.state.numOfXcomp>0?<Xcomp/>:""}
                        {this.state.numOfXcomp>1?<Xcomp/>:""}
                        {this.state.numOfXcomp>1?<input type="button" value="submit"onClick={this.submit}/>:<input type="button" value="add X component" onClick={this.addXcomp}></input>}
                        
                        <div id="ans">
                            {/* ?ksd */}
                        </div>
                        
                    </div>
                    )
            
            
        }
       
    }
}
export default App;
