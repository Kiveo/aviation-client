import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeadNav = () => {
  let handleResponsive = () => {
    console.log("clicked the button");
    let navbar = document.getElementById("navBar");
    if (navbar.className === "navBar") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navBar";
    }
  }

  return (
    <header>
      <div className="navBar" id="navBar">
        {/* hamburger unicode: &#9776; */}
        <button className="navIcon" onClick={handleResponsive}>&#9776;</button>
        {/* airplane unicode: &#9992; */}
        <NavLink to="/" className="navLogo" id="navLogo" onClick={handleResponsive}>&#9992;</NavLink>
        <NavLink to="/airplanes"
          activeStyle={{borderRadius: 10, background: 'rgba(250,250,250,0.2)'}}
          onClick={handleResponsive}        
        >Airplanes</NavLink>
        <NavLink to="/new" 
          activeStyle={{borderRadius: 10, background: 'rgba(250,250,250,0.2)'}}
          onClick={handleResponsive}
        >Add To Listings </NavLink>
        <NavLink to="/about"
          activeStyle={{borderRadius: 10, background: 'rgba(250,250,250,0.2)'}}
          onClick={handleResponsive}
        >About</NavLink>
      </div>
    </header>
  );
};
