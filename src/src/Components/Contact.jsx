import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

export default function Contact() {
    const navigate = useNavigate()

    const handleBtn=()=>{
      navigate ("/",{state:{name:"Student"}})
      navigate ("/")
    }
  return (
    <div>
        <h1>Contact</h1>
    <Link to={'/'}>Home</Link><br /><br />
    <Link to={'/About'}>About</Link><br /><br />
    <button onClick={handleBtn}>Go To Home</button>
    </div>
  )
}
