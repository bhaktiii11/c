import { signInWithPopup } from 'firebase/auth'
import React, { useState} from 'react'
import { auth,provider } from '../../FirebaseConfig'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()

    const handleLogin = async () => {
        await signInWithPopup (auth, provider)

        .then((user) => {
            console.log(user)

            navigate("/DashBord")
        })
    }
    return (
        <div>
            <h1>Login With Google Authentication</h1>
            
            <button className='btn' onClick={handleLogin}>Log In / Sign In</button>
            
        </div>
    )
}