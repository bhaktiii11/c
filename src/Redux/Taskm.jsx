import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addData, deleteData, updateData} from '../feature/TodoSlice'

export default function Taskm() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [task,setTask] = useState("");
    const [priority,setPriority] = useState("");
    const [editindex,setEditindex] = useState(null);


    const count = useSelector((state) =>{
        return state.todoKey
    })

    const dispatch = useDispatch();

    const addRecord = (event) => {
        event.preventDefault()
        if (editindex == null) {
            dispatch (addData({id : Date.now(), name , email , task , priority}))
        } else {
            dispatch (updateData({ id: editindex, name, email, task, priority}))
            setEditindex(null)
        }
        
        setName("")
        setEmail("")
        setTask("")
        setPriority("")
    }
    const editRecord = (id) => {
        let singleData = count.students.find((item) => item.id == id)
        setName(singleData.name)
        setEmail(singleData.email)
        setTask(singleData.task)
        setPriority(singleData.priority)
        setEditindex(id)

    }

    const deleteRecord = (id) =>{
        dispatch(deleteData(id))
    }

  return (
    <div>
        <header>
        <h1>Task Scheduler</h1>
    </header>
    
        <div className="task-form">
            <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} value={name}/>
            <input type="text" placeholder='Enter Email Id' onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} value={task} />
            <select onChange={(e) => setPriority(e.target.value)} value={priority}>
                <option value="">Priority</option>
                <option value="top">Top Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
            </select><br/>
            <button id='button' onClick={addRecord}>
                {editindex ? "Update Data" : "Add Data"}
            </button>
        </div>
        
        <div className="task-list" id="task-list">
           <table width="100%" border='1'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>EMAIL</th>
                    <th>Task</th>
                    <th>Priority</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                 {
                    count ?
                         count.students.map((e,i) =>{
                            return <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.task}</td>
                                <td>{e.priority}</td>
                                <td><button id='btn' style={{ backgroundColor: "#2CBC99", border: "none"}} onClick={() => editRecord(e.id)}>EDIT</button></td>
                                <td><button id='btn' onClick={() => deleteRecord(e.id)}>DELETE</button></td>
                            </tr>
                         })
                         :
                         ""
                 }
            </tbody>
           </table>
        </div>
       
    </div>
  )
}
