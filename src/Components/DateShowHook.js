import React,{useState } from 'react';
function DateShow1 () {
    
    const [date,setDate] = useState (Date());

    const updateDate = () =>{
        setDate(
            {date : new Date().toLocaleString() } 
        )
    }
    return (
        <div onClick = {()=> updateDate() }>
        <button >Date1 : {date}</button>
        </div>
    )
}
export default DateShow1