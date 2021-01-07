import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Dropdown2 from "../Dropdown/Dropdown2.js";
import Navbtn from "../Navbtn/Navbtn";
import Dropdown1 from "../Dropdown/Dropdown1";

function Navbar() {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const onMouseEnter1 = () => {
    setDropdown1(true);
  };
  const onMouseLeave1 = () => {
    setDropdown1(false);
  };

  const onMouseEnter2 = () => {
    setDropdown2(true);
  };
  const onMouseLeave2 = () => {
    setDropdown2(false);
  };

  return (
    <>
      <nav className="navBar">
        <NavLink to="/" className="navbar-logo">
          <img src="images/logo.png" alt="logo" />
        </NavLink>

        <ul className="nav_menu">
          <li className="nav_item">
            <NavLink
              exact={true}
              activeClassName="is-active"
              to="/"
              className="nav_links"
            >
              Home
            </NavLink>
          </li>

          <li
            className="nav_item"
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <NavLink to="#!" className="nav_links">
              About Us <i className="fas fa-caret-down" />
            </NavLink>
            {dropdown1 && <Dropdown1 />}
          </li>

          <li
            className="nav_item"
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <NavLink to="#!" className="nav_links">
              Services <i className="fas fa-caret-down" />
            </NavLink>
            {dropdown2 && <Dropdown2 />}
          </li>

          <li className="nav_item">
            <NavLink
              activeClassName="is-active"
              to="/properties"
              className="nav_links"
            >
              Properties
            </NavLink>
          </li>

          <li className="nav_item">
            <NavLink
              activeClassName="is-active"
              to="/contact-us"
              className="nav_links"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <Navbtn />
      </nav>
    </>
  );
}

export default Navbar;
