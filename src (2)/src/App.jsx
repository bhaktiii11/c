import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Firebase/SignUp';
import SignIn from './Firebase/SignIn';
import Home from './Firebase/Home';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={SignUp}></Route>
          <Route path='/signin' Component={SignIn}></Route>
          <Route path='/home' Component={Home}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
