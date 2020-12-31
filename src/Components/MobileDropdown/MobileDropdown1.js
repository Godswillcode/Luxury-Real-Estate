import React from 'react'
import'./MobileDropdown.css'
import { NavLink } from "react-router-dom";

function MobileDropdown1({ closeMobileMenu }) {
    const dropdownItem1 = [
        {
            id: 1,
          title: 'About Luxury',
          path: '/aboutLuxury',
          cName: 'dropdown-link'
        },
        {
            id: 2,
          title: "FAQ'S",
          path: '/faq',
          cName: 'dropdown-link'
        },
      
      ];
    return (
        <>
      <ul className="mobileDropdown">
        {dropdownItem1.map((item) => {
          return (
            <li key={item.id} onClick={closeMobileMenu}>
              <NavLink to={item.path} className="mobileDropdown-link"> {item.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </>
    )
}

export default MobileDropdown1
