import React from "react";
import { NavLink } from 'react-router-dom'
import './Navbtn.css'

function Navbtn() {
  return (
    <div>
      <NavLink to="sign-up">
        <button className="NavBtn">Sign Up / log In</button>
      </NavLink>
    </div>
  );
}

export default Navbtn;
