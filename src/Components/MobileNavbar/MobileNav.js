import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MobileDropdown1 from '../MobileDropdown/MobileDropdown1'
import MobileDropdown2 from '../MobileDropdown/MobileDropdown2'
import '../Navbtn/Navbtn.css'
import './MobileNav.css'

function MobileNav() {
    const [click, setClick] = useState(false)
    const [dropdown1, setDropdown1] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)

     const handleClick = () => { setClick(!click) }
      const closeMobileMenu = () => { setClick(!click) }
      const dropMenu1 = () => {setDropdown1(!dropdown1)}
      const dropMenu2 = () => {setDropdown2(!dropdown2)}
     
    return (
     
         <nav className="mobilNav">
           <div className="top_wrap">
           <NavLink to="/">
            <img src="images/logo.png" alt="logo"/>
            </NavLink>
            <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
           </div>
             <ul className={click ? 'mobileNav-menu show' : 'mobileNav-menu'}>
                <li className="mobileN-item" onClick={closeMobileMenu}>
                    <NavLink exact={true} activeClassName='is-active' to="/" className="mobile-links">Home</NavLink>
                </li>

                <li className="mobileN-item" onClick={dropMenu1}>
                    <NavLink to="#!" className="mobile-links">About us </NavLink>
                    {dropdown1 && <MobileDropdown1 closeMobileMenu={closeMobileMenu}/>}
                </li>


                <li className="mobileN-item" onClick={dropMenu2}>
                    <NavLink to="#!" className="mobile-links"> Services </NavLink>
                    {dropdown2 && <MobileDropdown2 closeMobileMenu={closeMobileMenu}/>}
                </li>

                <li className="mobileN-item" onClick={closeMobileMenu}>
                    <NavLink activeClassName='is-active' to="/properties" className="mobile-links">Properties</NavLink>
                </li>

                <li className="mobileN-item" onClick={closeMobileMenu}>
                    <NavLink activeClassName='is-active' to="/contact-us" className="mobile-links">Contact Us</NavLink>
                </li>

                <li className="mobileN-item" onClick={closeMobileMenu}>
                    <NavLink to="/logIn" className="NavBtn ml-2 mt-2">Sign-Up / Log-In</NavLink>
                </li>
             </ul>
         </nav>
     
    )
}

export default MobileNav
