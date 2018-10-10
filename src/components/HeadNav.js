import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeadNav = () => {
  return (
    <header className="App-header">
      <h1 className="App-title">Welcome to Aviation Client</h1>
      <div className="NavBar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/new">Add To Listings</NavLink>
      </div>
    </header>
  );
};
