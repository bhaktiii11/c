import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth,provider } from '../../FirebaseConfig'

export default function DashBord() {
    const [record, setRecord] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const user = auth.currentUser
    
        if (user) {
            setRecord(user)
        }
        else{
            navigate("/")
        }
    }, [navigate])
    
    return (
        <div>
            <h1>
                {
                    record ? (
                        <>
                           <span>{record.displayName}</span>
                           <br/>
                        </>
                    )
                    : (<p>Loading...</p>)
                }
            </h1>
        </div>
    )
}
