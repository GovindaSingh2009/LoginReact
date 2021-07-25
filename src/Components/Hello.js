import React from 'react';
import reactDom from 'react-dom';
const Hello = ()=>{
//return <h1>Hello Govinda ,learning JSX ?</h1>   This is for normal functional component
/*return(
<div className = 'dummyclass'>
<h1> 'Hello Govinda ,learning JSX ?' </h1>
</div>
)*/
//Now see usage of JSX and createElement has three parameters atleast
//return React.createElement('div',null,'Hello Govinda ,learning JSX ?')
//Then it is not appearing as <h1> in div

//Using JSX we are keeping the code clean and elegant
return React.createElement(
    'div',
    {id:'hello',className:'dummyclass'},  //instead of null we can write 'id' attribute in key value pair
    React.createElement('h1',null,'Hello Govinda ,learning JSX ?')
    );
}

export default Hello;