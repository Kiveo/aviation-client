import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import { getAirplanes, deleteAirplane } from '../actions/airplanes';
import AirplaneCard from '../components/AirplaneCard';

class SampleAirplane extends Component {
  componentDidMount() {
    this.props.getAirplanes();
  }
  
  render() {
    let airplane_id = this.props.match.params.airplane_id;
    let airplane = this.props.airplane
    const conditionalRender = () => {
      if (airplane) {
        // return card after props mount (async is post initial component mount)
        return <AirplaneCard airplane={airplane} key={airplane.id} delete={this.props.deleteAirplane}/>
      }
    }

    return(
      <div className="AirplanesContainer">
        <h1>Aircraft Display: Aircraft {airplane_id}</h1>
        <div className="AirplanesFlexBox">
          {conditionalRender()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let airplane_id = parseInt(ownProps.match.params.airplane_id, 10);
  return {
    airplane: state.airplanes.find(airplane => airplane_id)
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    deleteAirplane: (airplane) => {dispatch(deleteAirplane(airplane) )},
    getAirplanes: () => {dispatch(getAirplanes() )}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleAirplane);