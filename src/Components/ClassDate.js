import React,{Component} from 'react';
class DateShow extends Component
{
   constructor(){
       super();
       this.state = {
           date : new Date().toLocaleString()
       }
   }
   updateDate(){
       this.setState(
        {date : new Date().toLocaleString()}  //convert a date object to string
       )
   }
render(){
    return (
        <div className = "date" onClick = {()=> this.updateDate() }>
        <button >Date : {this.state.date}</button>
        </div>
    )
}
}
export default DateShow;
