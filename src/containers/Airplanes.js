import React, { Component } from 'react';
import './Airplanes.css';
import AirplaneCard from '../components/AirplaneCard';
import AirplaneForm from './AirplaneForm';

class Airplanes extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     name: ''
  //   }
  // }

  render() {
    return(
      <div className="AirplanesContainer">
        <h1>Airplanes</h1>
        <div className="AirplanesFlexBox">
        {this.props.airplanes.map(airplane => <AirplaneCard airplane={airplane} key={airplane.id}/> )}
        </div>
        <AirplaneForm />
      </div>
    )
  }
}

export default Airplanes;