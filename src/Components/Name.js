import React from 'react';
const Name = props =>{
    /*here we can also write above code as below:
    Method 1 : const Name = ({name1 , city}) =>{
        Method 2 : const {name1,city} = props
        ...
        ...
        <h3>Hello {name1} you live in {city} </h3>
        */

    console.log(props); 
    //we have wrapped everything in simgle div tag as JSX we have should contain only one wrapper element.
    return (
        <div> 
            <h3>Hello {props.name1} you live in {props.city} </h3>
    {props.children}
    </div>
    )
}
export default Name;