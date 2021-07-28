import React,{useState} from 'react';
function HookAddItem () {
const[item,setItems] = useState([])

const addItem = ()=>{
    setItems ([...item,
    {id : item.length ,value : Math.floor(Math.random()*10)+1}
    ])
}

return(
    <div>Click below to Add random items 
        <br></br>
    <button onClick = {addItem}>Add a item</button>
    <ul>{
    item.map(item => (
        <li key={item.id}>{item.value}</li>
    ))
    }
 </ul>
    </div>

)
}
export default HookAddItem