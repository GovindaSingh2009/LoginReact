import React,{useState} from "react";
function HookCounter (){
   /* useState () : Which accepts the initial value of the state variable and returns a pair of values 
i.e current value of state variable and method which will update state variable.*/
 const initialcount = 0; 
const [count , setCount1 ]=useState(initialcount)  //variable as input
console.log(count);

const incrementFive = () =>{
    for (let i=0;i<5;i++)
    {
        setCount1( prevCount => prevCount+1) ; //arrow function
}
}
        return (
        <div>
        <button>Click to get current count features :  {count}</button>
                        <br></br>
        <button>Click to get prev  count : {count-1} </button>
        <button onClick = { ()=> setCount1(count+1)}   > Increment </button>
        {/*setstate stores previous values   */}  
        <button onClick = { ()=> setCount1(count-1)}  > Decrement </button>
        <button onClick = { ()=> setCount1(initialcount)} > Reset </button>
        <button onClick = {(incrementFive)} > Increment5 </button>
         </div>
    )
}
export default HookCounter;