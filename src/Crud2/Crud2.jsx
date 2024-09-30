import React, {useState, useEffect} from 'react'

export default function Crud2() {
  const[name,setName]=useState("")
    const[task,setTask]=useState("")
    const[priority,setPriority]=useState("")
    const[time,setTime]=useState("")

    const[record,setRecord]=useState(null)
    const[editIndex,setEditIndex]=useState(null)

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("Student")) || []
        setRecord(data)
    },[])

    const handleAdd=()=>{
        let user = {id : Date.now(),name,task,priority,time:"pending"}
        let oldRecord = JSON.parse(localStorage.getItem("Student"))||[]

        if(editIndex){
            let singleData = record.find((item)=>item.id == editIndex)
            singleData.id = editIndex
            singleData.name = name
            singleData.task = task
            singleData.priority = priority
            singleData.time = time
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
    setTask("")
    setPriority("")
    setTime("")

    }

    const handleDelete = (id) =>{
        let deleteData = record.filter((item)=>item.id != id)
        setRecord(deleteData)
        localStorage.setItem("Student",JSON.stringify(deleteData))
    }

    const handleEdit = (id)=>{
        let singleData = record.find((item)=>item.id == id)
        setName(singleData.name)
        setTask(singleData.task)
        setPriority(singleData.priority)
        setTime(singleData.time)
        setEditIndex(id)
    }
    const handleComplete=(id)=>{
        let singleData = record.find((item)=>item.id==id)
        if(singleData){
            singleData.time = "Completed"
        }

        localStorage.setItem("Student",JSON.stringify(record))
        setRecord(record.slice())
    }

  return (
    
    <div className="task-container">
    
    <h2 className="task-title">TASK MANAGER</h2><br />
    <hr className="separator"/>
    <form className="task-form">
        <input type="text" id="task-input" className="task-input" placeholder="Enter your name" onChange={(e) =>setName(e.target.value)}/> <br /><br />
        <input type="text" id="task-input" className="task-input" placeholder="Enter your task" onChange={(e) =>setTask(e.target.value)}/> <br /><br />
        <select id="task-input" className="task-input" onChange={(e) =>setName(e.target.value)}>
                <option value="top">Top Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
            </select><br /><br />
            <button className='btn' onClick={handleAdd}>{editIndex?"Update Data":"Add Data"}</button>

    </form>
    <br /><br />
    <table width="100%" border='1'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>TASK</th>
                            <th>PRIORITY</th>
                            <th>TIME</th>
                            <th colSpan={3}>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            record?
                            record.map((e,i)=>{
                                return <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.task}</td>
                                <td>{e.priority}</td>
                                <td>{e.time}</td> 
                            
                                <td><button id='btn' onClick={()=>handleEdit(e.id)} >Edit</button></td>
                            <td><button id='btn' onClick={()=>handleDelete(e.id)} >Delete</button></td>
                            <td><button id='btn' onClick={()=>handleComplete(e.id)} >Complete</button></td>
                            </tr>
                            })
                            :
                            ""
                        }
                    </tbody>
                </table> 
                <br /><br />
</div>
  )
}
