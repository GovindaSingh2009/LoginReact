import React from 'react';
const Hello = ()=>{
    var result ;
//return <h1>Hello Govinda ,learning JSX ?</h1>   This is for normal functional component
//Using JSX we are keeping the code clean and elegant
function dateHandler()  //dateHandler function is not being called below just its Events getting handled
{
 result = console.log('26-07-21');
}

//While using event handler don't call it ,I mean don't write the method ()just write the name
return(
<div id = 'hello' className = 'dummyclass'>
<h2> 'Hello Govinda ,learning JSX ?' </h2>
<button onClick ={dateHandler}> Please click to get the date </button>
<button>result</button>
</div>
)
//Now see usage of JSX and createElement method has three parameters atleast
//return React.createElement('div',null,'Hello Govinda ,learning JSX ?')
//Then it is not appearing as <h1> in div

//Without JSX how code will look
/*return React.createElement(
    'div',
    {id:'hello',className:'dummyclass'},  //instead of null we can write 'id' attribute in key value pair
    React.createElement('h1',null,'Hello Govinda ,learning JSX ?')
    );*/
}

export default Hello;