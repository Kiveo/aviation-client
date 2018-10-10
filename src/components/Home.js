import React from 'react';

import { BottomBanner } from './BottomBanner';

export const Home = () => {
  return (
    <div className="App">

      <div className="heroImage">
        <span className="heroText">
          <h1>Welcome to Aviation Client</h1>
          <p>template web app for aviation developers</p>
        </span>
      </div>
      <BottomBanner />
    </div>
  )
}