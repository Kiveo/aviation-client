import React from 'react';

const AirplaneCard = ({airplane}) => (
  <div className="AirplaneCard" key={airplane.id}>
    <h3>{airplane.name}</h3>
    <p>Seats: {airplane.seats}</p>
    <img className="AirplaneImg" src={airplane.img_url} alt={'Image of ' + airplane.name}/>
    <p>FAA Identifier: {airplane.identifier}</p>
    <p>Hourly Rate: ${airplane.lesson_rate}</p>
  </div>
);

export default AirplaneCard;