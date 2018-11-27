import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeadNav = () => {
  let handleResponsive = () => {
    console.log("clicked the button");
    let icon = document.getElementById("navIcon");
    if (icon.className === "navIcon") {
      icon.className += " responsive";
    } else {
      icon.className = "navIcon";
    }
  }

  return (
    <header>
      <div className="navBar">
        {/* hamburger unicode: &#9776; */}
        <button className="navIcon" id="navIcon" onClick={handleResponsive}>&#9776;</button>
        {/* airplane unicode: &#9992; */}
        <NavLink to="/" className="navLogo">&#9992;</NavLink>
        <NavLink to="/airplanes"
          activeStyle={{borderRadius: 10, background: 'rgba(250,250,250,0.2)'}}        
        >Airplanes</NavLink>
        <NavLink to="/about"
          activeStyle={{borderRadius: 10, background: 'rgba(250,250,250,0.2)'}}
        >About</NavLink>
        <NavLink to="/new" 
          activeStyle={{borderRadius: 10, background: 'rgba(250,250,250,0.2)'}}
        >Add To Listings </NavLink>
      </div>
    </header>
  );
};
