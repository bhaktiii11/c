import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate = useNavigate()

    const handleSignUp = ()=>{
        let user = createUserWithEmailAndPassword(auth,email,password);
        console.log(user); 
        if(user){
            navigate("/home")
        }       
    }
  return (
    <div>
        <h1>SignUp</h1>
        <input type="text" placeholder='Enter your Email'  onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSignUp}>Sign Up</button>
        <Link to={"/signin"}>Sign In ?</Link>
    </div>
  )
}
