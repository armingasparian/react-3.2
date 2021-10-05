import React from "react";
import "../Header/Header.css";
import planet from "../../images/planet-earth.png";

function Header() {
  return(
    <header className="header">
      <img src={planet} alt=""/>
    </header>
  )
}

export default Header;