import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Filter/Home'
import Food from './Filter/Food'
import Electronic from './Filter/Electronic'
import Beuty from './Filter/Beuty'
import Clothes from './Filter/Clothes'
import Stationery from './Filter/stationery'


export default function App() {
  return (
    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/food' element={<Food/>}></Route>
          <Route path='/electronic' element={<Electronic/>}></Route>
          <Route path='/beuty' element={<Beuty/>}></Route>
          <Route path='/clothes' element={<Clothes/>}></Route>
          <Route path='/stationery' element={<Stationery/>}></Route>
        </Routes>
      </BrowserRouter>

      

    </div>
  )
}
