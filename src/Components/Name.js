import React from 'react';
const Name = props =>{
    console.log(props); 
    //we have wrapped everything in simgle div tag as JSX we have shoulf contain only one wrapper element.
    return (
        <div> 
            <h3>Hello {props.name1} you live in {props.city} </h3>
    {props.children}
    </div>
    )
}
export default Name;