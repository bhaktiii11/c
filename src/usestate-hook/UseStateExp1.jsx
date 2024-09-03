import React, { useState } from 'react'

export default function Hooks() {

    const [count , SetCount] = useState(0)
    const [name , SetName] = useState("bhakti")
    const [arr , SetArr] = useState([1,2,3,"bhakti",4,5]);
    const [obj , SetObj] = useState({name : "Komal" , subject : "react"})
    const [arrObj , SetArrObj] = useState([{name : "Bhakti" , subject : "react"},{name : "Manu" , subject : "Full stake"}])

    const increase = () => {
        SetCount(count+1)
    }
    const decrease = () => {
        SetCount(count-1)
    }
  return (
    <div className='div'>
             <h1>UseState</h1>
             <h3>{count}</h3>
             <button onClick={increase}>Increase</button><br/>
             <button onClick={decrease}>Decrease</button>
             <h3>{name}</h3>   
             <h1>Array</h1>

            {
                arr.map((e , i) => {
                    return <p key={i}>{e}</p>
                })
            }

<h1>Object</h1>

            <p>{obj.name}</p>
            <p>{obj.subject}</p>

            <h1>ArrayObject</h1>

        {
                arrObj.map((e,i) => {
                    return <ul key={i}> <br />
                        <li>{e.name}</li> 
                        <li>{e.subject}</li>
                    </ul>
                })
             } 
    </div>
  )
}