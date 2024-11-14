import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import Home from './Components/Home'

export default function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' Component={Signup}></Route>
              <Route path='/SignIn' Component={Signin}></Route>
              <Route path='/Home' Component={Home}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}