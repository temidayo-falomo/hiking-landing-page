import React from 'react'
import './Header.css'
import {BsInstagram, BsArrowDown} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="left-side">
           <span>Follow Us</span>
           <BsInstagram />
           <AiOutlineTwitter />
        </div>

        <div className="middle">
          <div className="top-part-middle">
            <div className="underline"></div>
            <h5>A Hiking Guide</h5>
          </div>

          <h1>
            Be Prepared For The Mountains And Beyond!
          </h1>

          <p><a href='#one'>scroll down <BsArrowDown /></a></p>
        </div>

        <div className="right-side">
          <div>
             <p style={{cursor: "pointer"}}>Start</p>
             <p><a href='#one'>01</a></p>
             <p><a href='#two'>02</a></p>
             <p><a href='#three'>03</a></p>
          </div>

          <div className="line"></div>

        </div>
      </div>
    </header>
  )
}

export default Header