import React,{useState , useEffect} from 'react';
function TitleCount() {
    const [count , setCount] = useState(0)
    const [name , setName] = useState('')
    
    useEffect(() => {
        //conditionally run effect to reduce redundant work and optimize the performance
        console.log('useEffect-updating the document title')
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;//use key ` near to below esc key
      },[count])  //we put condition that if count value don't change then don't execute the useEffect

    return(
        <div> 
            <input type = 'text' value = {name} onChange = {e => setName(e.target.value)} />
            Click to increase the count at title and button
            <br></br>
            <button onClick = { () => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}
export default TitleCount