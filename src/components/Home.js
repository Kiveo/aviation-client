import React from 'react';

import Airplanes from '../containers/Airplanes';
import { BottomBanner } from './BottomBanner';

export const Home = () => {
  return (
    <div className="App">
      <Airplanes />
      <BottomBanner />
    </div>
  )
}