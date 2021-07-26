import React,{Component} from 'react';
class Message extends Component{

    constructor() {
        super();
        this.state = {
            message : 'Welcome visitor Please  subscribe'
        }
    }

changeMessage ()
{
    this.setState
    (
        {message : 'Welcome ,thanks for subscribing'}
    )
}


render(){
    return (
        <div> 
        <h2>{this.state.message}</h2>
        <button onClick = {()=> this.changeMessage()}>Subscribe</button>
        </div>
 )
 }
    
}
export default Message;