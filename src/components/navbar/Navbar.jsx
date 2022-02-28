import React, { useState } from 'react'
import './Navbar.css'
import {RiAccountCircleLine, RiCloseLine} from 'react-icons/ri';
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {

  const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


  return (
    <nav>
      <div className="nav-container">
        <div className="mobile-container">
          <img src='./FigmaAssets/Logo.svg' alt='' className='logo'/>
          <div className='menu-item' onClick={handleClick}>
              {click ? <RiCloseLine /> : <GiHamburgerMenu />}
          </div>
        </div>

        <div className={click ? 'sidebar active' : 'sidebar'}>

        <ul className="nav-links">
          <li><a href='/'>Equipment</a></li>
          <li><a href='/'>About us</a></li>
          <li><a href='/'>Blog</a></li>
        </ul>

        <div className="account">
          <p className='acc-logo'><RiAccountCircleLine /></p>
          <p>Account</p>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar