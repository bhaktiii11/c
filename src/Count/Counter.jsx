import React, {useState} from 'react'

export default function Counter() {
    var [count,setCount] = useState(0)
    
    var increase = () => {
        setCount(count + 1)
    }
    var decrease = () => {
        setCount(count - 1)
    }
    var reset = () => {
        setCount(0)
    }
  return (
    // <div className='div'>
    //     <h1>counter</h1>
    //     <h2>{count}</h2>
    //     <div className="div1">
    //         <button onClick={increase}>Increase (<i class="fa-solid fa-plus"></i>)</button>
    //         <button onClick={decrease} >Decrease (<i class="fa-solid fa-minus"></i>)</button>
    //         <button onClick={reset} >Reset (<i class="fa-solid fa-rotate-right"></i>)</button>
    //     </div>
    // </div>
    <div class="counter-app">
        <h1>Counter</h1>
        <div class="counter">
            <button onClick={increase}> <i class="fa-solid fa-plus"></i></button>
            <div class="count" id="count">{count}</div>
            <button onClick={decrease}><i class="fa-solid fa-minus"></i></button>
        </div>
        <button class="reset-btn" onClick={reset}><i class="fa-solid fa-rotate-right"></i></button>
    </div>
  )
}
