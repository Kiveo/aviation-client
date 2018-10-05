import React, { Component } from 'react';
import { connect } from 'react-redux';

import AirplaneCard from '../components/AirplaneCard';
import AirplaneForm from './AirplaneForm';
import './Airplanes.css';

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

const mapStateToProps = () => {
  return({
    airplanes: state.airplanes
  })
}

export default connect(mapStateToProps)(Airplanes);