import React, { useState } from "react";
import "./Dropdown.css";
import { NavLink } from "react-router-dom";

function Dropdown() {
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
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown_menu clicked" : "dropdown_menu"}
      >
        {dropdownItem2.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
