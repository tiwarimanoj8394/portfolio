import React, { useState } from 'react'
import './navbar.css'
import logo from '../assets/myicon.png'
import contactimg from '../assets/contact.png'
// react-scroll is s js lib to make single page application with an single page routing alternative to react router dom
import menu from '../assets/menu.png'
import { Link } from 'react-scroll'

const NavBar = () => {
  const [showmenu, setShowmenu] = useState(false)

  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopmenu">
          {/* here we define some of the link attributer to render the web page */}

          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} className="desktopmenuListItem">Home</Link>
          <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} className="desktopmenuListItem">About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} className="desktopmenuListItem">Portfolio</Link>

          <Link activeClass='active' to='contactpage' spy={true} smooth={true} offset={-100} className="desktopmenuListItem">Clients</Link>
        </div>
        <button className='desktopmenuBtn' onClick={() => {
          document.getElementById('contactpage').scrollIntoView({ behavior: 'smooth' });
        }}>
          <img src={contactimg} alt="img" className="desktopmenuimg" />
          Contact
        </button>
        {/* ///////////////////////////////////////////////////////////////// */}

        <img src={menu} alt="menu" className='mobailmenu' onClick={() => setShowmenu(true)} />
        <div className="navmenu" style={{ display: showmenu ? 'flex' : 'none' }}>
          {/* here we define some of the link attributer to render the web page */}

          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} className="listitems" onClick={() => setShowmenu(false)}>Home</Link>
          <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} className="listitems" onClick={() => setShowmenu(false)}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} className="listitems" onClick={() => setShowmenu(false)}>Portfolio</Link>

          <Link activeClass='active' to='contactpage' spy={true} smooth={true} offset={-100} className="listitems" onClick={() => setShowmenu(false)}>Clients</Link>
          <Link activeClass='active' to='contactpage' spy={true} smooth={true} offset={-100} className="listitems" onClick={() => setShowmenu(false)}>Contact</Link>
        </div>

      </nav>
    </div>

  )
}

export default NavBar


//logic click ` in burger menu 