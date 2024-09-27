
import React, { useEffect, useState } from 'react'

export default function Crud() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const[record,setRecord]=useState(null)
    const[editIndex,setEditIndex]=useState(null)

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("Student")) || []
        setRecord(data)
    },[])

    const handleAdd=()=>{
        // let user = {id : Date.now(),name,email,password}
        // JSON.parse(localStorage.getItem("Student")) || []
        // record.push(user)
        // localStorage.setItem("student",JSON.stringify(record))

        let user = {id : Date.now(),name,email,password}
        let oldRecord = JSON.parse(localStorage.getItem("Student"))||[]
        
        
            if(editIndex){
                let singleData = record.find((item)=>item.id == editIndex)
                singleData.id = editIndex
                singleData.name = name
                singleData.email = email
                singleData.password = password
                localStorage.setItem("Student",JSON.stringify(record))
                setEditIndex(null)
            }
            else{
                oldRecord.push(user)
                setRecord(oldRecord)
                localStorage.setItem("Student",JSON.stringify(oldRecord))
                console.log(oldRecord);
            }

        setName("")
        setEmail("")
        setPassword("")

    }

    const handleDelete = (id) =>{
        let deleteData = record.filter((item)=>item.id != id)
        setRecord(deleteData)
        localStorage.setItem("Student",JSON.stringify(deleteData))
    }

    const handleEdit = (id)=>{
        let singleData = record.find((item)=>item.id == id)
        setName(singleData.name)
        setEmail(singleData.email)
        setPassword(singleData.password)
        setEditIndex(id)
    }

    
  return (
    <div>
        <h1>CRUD WITH LOCAL STORAGE</h1>

        <input type="text" value={name} placeholder='Enter name' onChange={(e)=>setName(e.target.value)}/>
        <input type="text" value={email} placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" value={password} placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/>

        <button onClick={handleAdd}>{editIndex ? "Update Data" : "Add Data"}</button>

        <table border='1' width="50%">
            <thead>
               <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
               </tr>
            </thead>
            <tbody>
                {
                    record ?
                    record.map((e,i)=>{
                        return <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.password}</td>
                            <td><button onClick={()=>handleEdit(e.id)} >Edit</button></td>
                            <td><button onClick={()=>handleDelete(e.id)} >Delete</button></td>
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
