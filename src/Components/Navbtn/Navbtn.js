import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbtn.css";

function Navbtn() {
  return (
    <div>
      <NavLink to="logIn">
        <button className="NavBtn">Sign-Up / Log-In</button>
      </NavLink>
    </div>
  );
}

export default Navbtn;
