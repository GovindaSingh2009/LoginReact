import React,{useState} from 'react';
function HookName (){
    const [name ,setName] = useState({firstname : 'FName',lastname : 'LName'})
return(

<form>
    <input 
    type='text'
value = {name.firstname}
onChange ={ e =>setName({...name,firstname : e.target.value})}
    />
    <input 
    type='text'
value = {name.lastname}
onChange ={ e =>setName({...name,lastname : e.target.value})}
    />

    <h3>
        Your firstname is : {name.firstname}
    </h3>
     <h3>
        Your lastname is : {name.lastname}
    </h3>
</form>
)

}
export default HookName