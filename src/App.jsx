import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Crud & Routing/Home';
import Create from './Crud & Routing/Create';
import Delete from './Crud & Routing/Delete';
import Update from './Crud & Routing/Update';
import { useState } from 'react';




export default function App() {
  const [data, setData] = useState(
    [
      { id: 1, name: "bhakti", subject: "react"},
      { id: 2, name: "KMB", subject: "nodejs"},
    ]
  )
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home data={data}/>}></Route>
        <Route path='/create' element={<Create data={data} setData={setData}/>}></Route>
        <Route path='/delete' element={<Delete data={data} setData={setData}/>}></Route>
        <Route path='/update' element={<Update data={data} setData={setData}/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
  )
}
