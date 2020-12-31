import React from "react";
import { NavLink } from "react-router-dom";
import "./MobileDropdown.css";

function MobileDropdown2({ closeMobileMenu }) {
  const dropdownItem2 = [
    {
      id: 1,
      title: "Real Estate",
      path: "/realEstate",
      cName: "dropdown-link",
    },
    {
      id: 2,
      title: "Farm Estate",
      path: "/farmEstate",
      cName: "dropdown-link",
    },
    {
      id: 3,
      title: "Investment",
      path: "/investment",
      cName: "dropdown-link",
    },
  ];
  return (
    <>
      <ul className="mobileDropdown">
        {dropdownItem2.map((item) => {
          return (
            <li key={item.id} onClick={closeMobileMenu}>
              <NavLink to={item.path} className="mobileDropdown-link">
                {" "}
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MobileDropdown2;
