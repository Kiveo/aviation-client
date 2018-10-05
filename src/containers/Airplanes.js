import React, { Component } from 'react';
import { connect } from 'react-redux';

import AirplaneCard from '../components/AirplaneCard';
import AirplaneForm from './AirplaneForm';
import getAirplanes from '../actions/airplanes';
import './Airplanes.css';

class Airplanes extends Component {

  componentDidMount() {
    
  }

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

const mapStateToProps = (state) => {
  return({
    airplanes: state.airplanes
  })
}

export default connect(mapStateToProps, {getAirplanes})(Airplanes);