import React from "react";
import "../Navbar/Navbar.css";
import {NavLink} from "react-router-dom";

function Navbar() {
  return(
    <nav className="nav">
      <div className="item">
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className="item active">
        <NavLink to="/dialogs">Messages</NavLink>
      </div>  
         <div className="item">
        <NavLink to="/news">News</NavLink>
      </div>  
         <div className="item">
        <NavLink to="/music">Music</NavLink>
      </div>     
  </nav>
  )
}

export default Navbar;