import React from 'react'

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Home</h1>
        <Link to={'/About'}>About</Link><br /><br />
        <Link to={'/Contact'}>Contact</Link>

    </div>
  )
}
