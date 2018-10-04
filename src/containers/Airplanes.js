import React from 'react';
import './Airplanes.css';
import AirplaneCard from '../components/AirplaneCard';

const Airplanes = (props) => (
  <div className="AirplanesContainer">
    <h1>Airplanes</h1>
    <div className="AirplanesFlexBox">
    {props.airplanes.map(airplane => <AirplaneCard airplane={airplane} key={airplane.id}/> )}
    </div>
  </div>
);

export default Airplanes;