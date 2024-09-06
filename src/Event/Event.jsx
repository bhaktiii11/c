import React, { useState } from 'react'

export default function Event() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("");
    const [sub,setSub] = useState("");

    const[isVisible,setIsVisible]=useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("form submitted");
        let obj = {
            name: name,
            subject: sub 
        }
        console.log(obj);
    }
    
  return (
    <div>
        <h1>onClick,onChange,onSubmit</h1>
        <h1>{count}</h1>
        <button onClick={() =>setCount(count + 1)} >Click</button>
        <frorm onSubmit={(event) => handleSubmit(event)}>
            <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Enter your subject' onChange={(e) => setSub(e.target.value)} />
            <button type='submit'>Submit</button> 
        </frorm>

        {
            isVisible && <h1>bye</h1>
        }

        <button onClick={() => setIsVisible(!isVisible)} >click</button>

        {
            isVisible? <h1>hy</h1>: <h1>bye</h1>
        }

        <button onClick={() => setIsVisible(!isVisible)} >click</button>

        </div>
  )
}
