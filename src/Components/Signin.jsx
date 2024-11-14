import React, { useState } from 'react'
import { useNavigate , Link} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebaseConfig'

export default function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleSignin = (e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then(user=>{
            console.log(user);
            navigate("/Home")
        })
    }


    return (
        <div className="login-container">
            <h1>Sign In</h1>
            <p>login here using your username and password</p>
            <br />
            <form onSubmit={(e)=>handleSignin(e)}>
                <div className="input-container">
                    <span className="icon">👤</span>
                    <input type="text" placeholder="@Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-container">
                    <span className="icon">🔒</span>
                    <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="login-btn">Sign In</button>
            </form>

            <div className="options">
                <a href="#" className="forgot-password">Forgot Password</a>
                <Link to={"/"} className="sign">Sign Up</Link>
            </div>
        </div>
    )
}

