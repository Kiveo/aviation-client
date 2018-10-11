import React from 'react';
// import { deleteAirplane } from '../actions/airplanes';

const AirplaneCard = (props) => (
  <div className="AirplaneCard">
    <h3>{props.airplane.name}</h3>
    <p>Seats: {props.airplane.seats}</p>
    <img className="AirplaneImg" src={props.airplane.img_url} alt={'Image of ' + props.airplane.name}/>
    <p>FAA Identifier: {props.airplane.identifier}</p>
    <p>Hourly Rate: ${props.airplane.lesson_rate}</p>
    <button className="AirplaneDelete" onClick={() => props.delete(props.airplane)}>Delete</button>
  </div>
);

export default AirplaneCard;