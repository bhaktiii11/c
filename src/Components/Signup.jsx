
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault(); // Prevents form submission page reload

        if (name && email && number && password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((data) => {
                    return setDoc(doc(db, "users", data.user.uid), {
                        name,
                        email,
                        number
                    });
                })
                .then(() => {
                    console.log("User added successfully");
                    // Clear inputs if sign-up is successful
                    setName("");
                    setEmail("");
                    setNumber("");
                    setPassword("");

                })
                .catch((error) => {
                    console.error("Error during sign up:", error);
                });
        } else {
            alert("Please fill out all fields.");
        }
    };

    return (
        <div className="login-container" style={{ height: "580px" }}>
            <h1>Sign up</h1>
            <p>Sign up here using your email and password</p>
            <br />
            <form onSubmit={handleSignUp}>
                <div className="input-container">
                    <span className="icon">👤</span>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <span className="icon">✉️</span>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <span className="icon">📞</span>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <span className="icon">🔒</span>
                    <input
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                
                <button type="submit" className="login-btn">Sign Up</button>
            </form>
            <div className="options">
                <a href="#" className="forgot-password">Forgot Password</a>
                <Link to="/Signin" className="sign">Sign In</Link>
            </div>
        </div>
    );
}
