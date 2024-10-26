import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const navigate = useNavigate()

    const handleSignIn = ()=>{
        let user = signInWithEmailAndPassword(auth,email,password)
        console.log(user);
        if(user){
            navigate("/home")
        }
        
    }
  return (
    <div>
        <h1>SignIn</h1>
        <input type="text" placeholder='Enter your Email'  onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSignIn}>Sign In</button>
    </div>
  )
}
