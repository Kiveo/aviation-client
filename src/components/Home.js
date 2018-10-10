import React from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="App">

      <div className="heroImage">
        <span className="heroText">
          <h1>Welcome to Aviation Client</h1>
          <p>-template web app for aviation developers-</p>
          <p><NavLink to="/airplanes">Enter</NavLink></p>
        </span>
      </div>
    </div>
  )
}