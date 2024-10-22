import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Apiwithserver() {
  const [record, setRecord] = useState("")
  const [id, setId] = useState("")
  const [title, setTitle] = useState("")
  const [views, setViews] = useState("")

  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    fetchApi()
  }, [])
  const fetchApi = async () => {
    let responce = await axios.get("http://localhost:5000/posts")
    console.log(responce.data);
    setRecord(responce.data)
  }
  const addData = async () => {
    if (editIndex) {
      let updateRes = await axios.put(`http://localhost:5000/posts/${editIndex}`, { "id": id, "title": title, "views": views })
      console.log(updateRes);
      setRecord(record.map(item => item.id === editIndex ? updateRes.data : item))
    }
    else {
      let addResponce = await axios.post("http://localhost:5000/posts", { "id": id, "title": title, "views": views })
      console.log(addResponce);
      setRecord([...record, addResponce.data])
    }
    setId("")
    setTitle("")
    setViews("")
    setEditIndex(null)
  }
  const deleteData = async (id) => {
    let deleteResponce = await axios.delete(`http://localhost:5000/posts/${id}`)
    console.log(id);
    setRecord(record.filter(item => item.id !== id))
  }
  const editData = async (id) => {
    let editResponce = record.find((item) => item.id == id)
    setId(editResponce.id)
    setTitle(editResponce.title)
    setViews(editResponce.views)
    setEditIndex(id)
  }
  return (
    <div>
      <h1>Apiwithserver</h1>
      <input type="text" value={id} placeholder='Enter Id' onChange={(e) => setId(e.target.value)} /><br /><br />
      <input type="text" value={title} placeholder='Enter Title Name' onChange={(e) => setTitle(e.target.value)} /><br /><br />
      <input type="number" value={views} placeholder='Enter Views' onChange={(e) => setViews(e.target.value)} /><br /><br />
      <button onClick={addData}>{editIndex ? "Update Data" : "Add Data"}</button>
      <br /><br />
      {/* {
            record ? 
              record.map((e,i)=>{
                return <ul key={i}>
                    <li>{e.id}</li>
                    <li>{e.title}</li>
                    <li>{e.views}</li>
                    <li><button onClick={()=>editData(e.id)}>Edit</button></li><br />
                    <li><button onClick={()=>deleteData(e.id)}>Delete</button></li>
                </ul>
              })
              :
              ""
        } */}
        
      <table width="50%" border='1'>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>VIEWS</th>
            <th colSpan={2}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            record ?
              record.map((e, i) => {
                return <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.title}</td>
                  <td>{e.views}</td>
                  <td><button onClick={() => editData(e.id)}>Edit</button></td>
                  <td><button onClick={() => deleteData(e.id)}>Delete</button></td>
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