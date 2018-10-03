import React from 'react';
import './Airplanes.css';

const Airplanes = (props) => (
  <div className="AirplanesContainer">
    <h1>Airplanes</h1>
    <div className="AirplanesFlexBox">
    {props.airplanes.map(airplane => 
      <div className="AirplaneCard">
        <h3>{airplane.name}</h3>
        <p>Seats: {airplane.seats}</p>
        <img className="AirplaneImg" src={airplane.img_url} alt={'Image of ' + airplane.name}/>
        <p>Hourly Rate: ${airplane.lesson_rate}</p>
        <p>FAA Identifier: {airplane.identifier}</p>
      </div>
    )}
    </div>
  </div>
);

export default Airplanes;