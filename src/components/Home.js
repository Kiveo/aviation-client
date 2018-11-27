import React from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="heroImage">
      <span className="heroText">
        <h1>Welcome to Aviation Client</h1>
        <p><NavLink to="/airplanes" className="heroEnter">Enter</NavLink></p>
      </span>
    </div>
  )
}