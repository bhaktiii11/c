import React from 'react'

export default function ListKey() {
    const arr= ["Apple","Mango","Orange","Banana","Graps"]
  return (
    <div className='div'>
        <h1>ListKey</h1>
        {
            arr.map((e,i)=>{
                return <p key={i}>{e}</p>
            })
        }
    </div>
  )
}