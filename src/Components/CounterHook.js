import React,{useState} from 'react';
function HookCounter (){
   /* useState () : Which accepts the initial value of the state variable and returns a pair of values 
i.e current value of state variable and method which will update state variable.*/
 const initialcount = 0;   
const [count , setCount ]=useState(initialcount)  //variable as input

const incrementFive = () =>{
    for (let i=0;i<5;i++)
    {
        setCount(prevCount => prevCount + 1) 
    }

}
        return (
    <div>Click to get count features : <button>{count}</button>
        <button onClick = { ()=> setCount(prevCount => prevCount+1)}  > Increment </button>
        <button onClick = { ()=> setCount(prevCount => prevCount-1)}  > Decrement </button>
        <button onClick = { ()=> setCount(initialcount)} > Reset </button>
        <button onClick = { incrementFive} > Increment5 </button>

         </div>
    )
}
export default HookCounter;