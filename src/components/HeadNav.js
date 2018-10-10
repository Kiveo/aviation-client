import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeadNav = () => {
  return (
    <header className="App-header">
      <h1 className="App-title">Aviation Client</h1>
      <div className="NavBar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about"
          activeStyle={{borderRadius: 10, background: 'rgba(250,250,250,0.2)'}}
        >About</NavLink>
        <NavLink to="/new" 
          activeStyle={{borderRadius: 10, background: 'rgba(250,250,250,0.2)'}}
        >Add To Listings</NavLink>
      </div>
    </header>
  );
};
