import React,{Component} from 'react';
class Counter extends Component{

    constructor(){
        super();
        this.state={
            count : 0
        }
    }
    increment(){
       this.setState(
       {count : this.state.count + 1 },
     ()=> {console.log('callback Value' , this.state.count)}//callback function console log
       ) 
       console.log(this.state.count); // Synchronus console log statements
                      
    }
render(){
    return (
        <div>
        <div>Please count the click <button>{this.state.count}</button></div>
        <button onClick = {()=> this.increment() }> Count </button>
        </div>
    )
}

}
export default Counter;
