import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  const [user, setUser] = useState(null)
  const [record, setRecord] = useState(null)

  useEffect(() => {
    let subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      }
    })
  }, [])

  useEffect(() => {
    if (user) {
      fetchUser()
    }
  }, [user])

  const fetchUser = () => {
    console.log(user.uid)
    getDoc(doc(db, "users", user.uid))

      .then(data => {
        console.log(data.data())
        setRecord(data.data())
      })
  }
  return (
    <div>
      <center>
      <Link to={"/signin"}>
      
        <button className="sign">Sign In</button>
      </Link>
      <br /><br />
      <h1 className='h1'>
        Hello,&nbsp;
        {
          record && <span style={{color:"#fe019a"}}>{record.name}</span>
        }
        &nbsp;Welcome To Our WebPage
      </h1>
      </center>
    </div>
  )
}
