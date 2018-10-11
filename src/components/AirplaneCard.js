import React from 'react';
import {Link} from 'react-router-dom';

const AirplaneCard = (props) => (
  <div className="AirplaneCard">
    <Link to={"/airplanes/" + props.airplane.id} className="AirplaneLink"><h3>{props.airplane.name}</h3></Link>
    <p>Seats: {props.airplane.seats}</p>
    <img className="AirplaneImg" src={props.airplane.img_url} alt={'Image of ' + props.airplane.name}/>
    <p>FAA Identifier: {props.airplane.identifier}</p>
    <p>Hourly Rate: ${props.airplane.lesson_rate}</p>
    <button className="AirplaneDelete" onClick={() => props.delete(props.airplane)}>Remove</button>
  </div>
);

export default AirplaneCard;