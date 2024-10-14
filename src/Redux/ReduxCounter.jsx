import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData } from '../features/TodoSlice';
// import { addData, deleteData } from 'features/TodoSlice';

export default function ReduxCounter() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("")

    const count = useSelector((state) =>{ 
        return state.todoKey
    })

    const dispatch = useDispatch();

    const addRecord = () => {
        dispatch(addData({ id: Date.now(), name,subject }))
        setName("")
        setSubject("")
    }

    const deleteRecord = (id) => {
        dispatch(deleteData(id))
    }

    return(
        <div>
            <h1>ReduxCounter</h1>
            <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
            <button onClick={addRecord} >add data</button>

            {
                count ?
                     count.students.map((e,i) => {
                        return <ul key={i}>
                            <li>{e.id}</li>
                            <li>{e.name}</li>
                            <li>{e.subject}</li>
                            <button>edit</button>
                            <button onClick={() => deleteRecord(e.id)} >delete</button>
                        </ul>
                     })
                     :
                     <p>No data</p>
            }
        </div>
    )
}