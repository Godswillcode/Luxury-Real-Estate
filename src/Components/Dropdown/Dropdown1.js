import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Dropdown.css";

function Dropdown1() {
  const dropdownItem1 = [
    {
      id: 1,
      title: "About Luxury",
      path: "/aboutLuxury",
      cName: "dropdown-link",
    },
    {
      id: 2,
      title: "FAQ'S",
      path: "/faq",
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
        {dropdownItem1.map((item) => {
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

export default Dropdown1;
