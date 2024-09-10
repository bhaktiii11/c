import React, { useEffect, useRef } from 'react'

export default function UseStateExp1() {
   const inputRef = useRef();

   useEffect
   const handleClick = () => {
       inputRef .current.focus();
       let p = inputRef .current .value 
       alert(`the value is ${p}`)
   }

   
  return (

    <div>
      <h1>UseStateExp1</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick} >click</button>

    </div>
  )
}
