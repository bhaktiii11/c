import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div id='main'>
       
        <Link to={"/food"}>Food</Link>
        <Link to={"/Electronic"}>Electronic</Link>
        <Link to={"/Beuty"}>Beuty</Link>
        <Link to={"/Clothes"}>Clothes</Link>
        <Link to={"/stationery items"}>stationery items</Link>
    </div>
  )
}
