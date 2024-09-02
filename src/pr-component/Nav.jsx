import React from 'react'

export default function Nav() {
  return (
    // <div className='nav'>
    <header>
        <div id="head"></div>
        <div className="menu">
            <a style={{color: 'orange'}} href="">home<i className="ri-arrow-down-s-line"></i></a>
            <a href="">pages<i class="ri-arrow-down-s-line"></i></a>
            <a href="">gallery<i class="ri-arrow-down-s-line"></i></a>
            <a href="">blog<i class="ri-arrow-down-s-line"></i></a>
            <a href="">shop<i class="ri-arrow-down-s-line"></i></a>
            <a href="">contact</a>
        </div>
        <button>
            Get in Touch 
        </button>
    </header>

    // </div>
  )
}
