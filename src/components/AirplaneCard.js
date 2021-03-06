import React from 'react';
import {Link} from 'react-router-dom';
import defaultplane from '../images/defaultplane.png';

const AirplaneCard = (props) => (
  <div className="AirplaneCard">
    {props.showButtons === "true" ?
      <Link to={"/airplanes/" + props.airplane.id} className="AirplaneLink"><h3>{props.airplane.name}</h3></Link>
      : <h1>{props.airplane.name}</h1> 
    }
    
    <p>Seats: {props.airplane.seats}</p>
    <img className="AirplaneImg" src={props.airplane.img_url ? props.airplane.img_url : defaultplane} alt={'leave url blank for default'}/>
    <p>FAA Identifier: {props.airplane.identifier}</p>
    <p>Hourly Rate: ${props.airplane.lesson_rate}</p>
    
    {props.showButtons === "true" ?
      <Link to={"/airplanes/" + props.airplane.id + "/edit"} className="AirplaneEditLink"><h3>Edit</h3></Link> : null
    }
    {props.showButtons === "true" ?
      <button className="AirplaneDelete" onClick={() => (window.confirm('Permanently remove this listing?')) && props.delete(props.airplane)}>Remove</button>
    :null }
  </div>
);

export default AirplaneCard;
