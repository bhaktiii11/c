import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import DashBord from './Components/DashBord'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' Component={Login}></Route>
          <Route path='/DashBord' Component={DashBord}></Route>
      </Routes>
    </BrowserRouter>
  )
}
