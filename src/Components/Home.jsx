import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../FirebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'

export default function Home() {

    const [user, setUser] = useState(null)
    const [record, setRecord] = useState([])

    const [task, setTask] = useState("")
    const [priority, setPriority] = useState("")

    const [editIndex, setEditIndex] = useState(null)

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
            fetchData()
        }
    }, [user])

    const fetchUser = () => {
        console.log(user.uid)
        getDoc(doc(db, "users", user.uid))

            .then(data => {
                console.log(data.data());
            })
    }

    const fetchData = async () => {
        let allData = await getDocs(collection(db, "Todos"))
        let filterData = allData.docs.map((data) => ({ docId: data.id, ...data.data() })).filter((item) => item.uid === user.uid)
        console.log(filterData)
        setRecord(filterData)
    }

    const handleTask = async () => {
        const obj = { uid: user.uid, task, priority }

        if (editIndex == null) {
            let addData = await addDoc(collection(db, "Todos"), obj)
                .then(data => {
                    setRecord([...record, obj])
                    fetchData()
                })
        }
        else {
            let updatedata = await updateDoc(doc(db, "Todos", editIndex), {
                id: user.uid, task, priority
            })
            fetchData()
        }
        setTask("")
        setPriority("")
        setEditIndex(null)
    }

    let handleDelete = async (id) => {
        let deleteData = await deleteDoc(doc(db, "Todos", id))
        fetchData()
    }

    let handleEdit = (id) => {
        let singleData = record.find(item => item.docId === id)
        setTask(singleData.task)
        setPriority(singleData.priority)
        setEditIndex(id)
    }


    return (
        <div className="login-container">
           <br />
                <div className="input-container">
                    <span className="icon">📜</span>
                    <input type="text" placeholder='Enter Task' value={task} onChange={(e) => setTask(e.target.value)} />
                </div>
                <div className="input-container">
                    <span className="icon">📈</span>
                    <select name="Priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option>Priority</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>                
                </div>

                <button type='submit' onClick={handleTask} className="login-btn">{editIndex == null ? "Add Task" : "Update Task"}</button>


<br /><br /><br />
            <table width="100%" border='1'>
                <thead>
                    <tr>
                        <th>TASK</th>
                        <th>PRIORITY</th>
                        <th colSpan={2}>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record ?
                            record.map((e, i) => {
                                return <tr key={i}>
                                    <td>{e.task}</td>
                                    <td>{e.priority}</td>
                                    <td><button id='btn' onClick={() => handleEdit(e.docId)} >Edit</button></td>
                                    <td><button id='btn' onClick={() => handleDelete(e.docId)} >Delete</button></td>
                                </tr>
                            })
                            :
                            ""
                    }
                </tbody>
            </table>


        </div>
    )
}