import React, { Component } from 'react';
import { connect } from 'react-redux';

import AirplaneCard from '../components/AirplaneCard';
import { getAirplanes, deleteAirplane } from '../actions/airplanes';

import './Airplanes.css';

class Airplanes extends Component {

  componentDidMount() {
    this.props.getAirplanes()
  }

  render() {
    return(
      <div className="AirplanesContainer">
        <h1>Airplane Listings</h1>
        <div className="AirplanesFlexBox">
          {this.props.airplanes.map(airplane => <AirplaneCard airplane={airplane} key={airplane.id} delete={this.props.deleteAirplane}/> )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    airplanes: state.airplanes
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    deleteAirplane: (airplane) => {dispatch(deleteAirplane(airplane) )},
    getAirplanes: () => {dispatch(getAirplanes() )}
  })
}

// concat?
export default connect(mapStateToProps, mapDispatchToProps)(Airplanes);