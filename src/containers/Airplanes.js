import React, { Component } from 'react';
import { connect } from 'react-redux';

import AirplaneCard from '../components/AirplaneCard';
import { getAirplanes, deleteAirplane } from '../actions/airplanes';

import './Airplanes.css';
import loader from '../images/loader.gif';

class Airplanes extends Component {

  componentDidMount() {
    this.props.getAirplanes()
  }

  render() {
    return(
      <div className="AirplanesContainer">
        <h1>Airplane Listings</h1>
        {(this.props.loader.loading === 'true') ? <img alt="loading..." src={loader}></img> : null}
        {(this.props.loader.loading === 'true') ? <p>This server sleeps while inactive<br /> Please allow a moment for it to awaken</p> : null}
        <div className="AirplanesFlexBox">
          {this.props.airplanes.map(airplane => <AirplaneCard airplane={airplane} key={airplane.id} delete={this.props.deleteAirplane} showButtons={"true"}/> )}
          {/* ensure left flex alignment  */}
          <div className="AirplaneCard Empty"></div> <div className="AirplaneCard Empty"></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    airplanes: state.airplanes,
    loader: state.loader 
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