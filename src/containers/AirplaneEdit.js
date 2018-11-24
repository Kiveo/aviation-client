import React, { Component } from 'react';
// import AirplaneForm from './AirplaneForm';
import AirplaneCard from '../components/AirplaneCard';
import connect from 'react-redux/lib/connect/connect';
import { getAirplanes } from '../actions/airplanes';
import AirplaneEditForm from './AirplaneEditForm';

class AirplaneEdit extends Component {
  componentDidMount() {
    this.props.getAirplanes();
  }

  componentDidUpdate() {
  }
  
  render() {
    let airplane_id = this.props.match.params.airplane_id;
    let airplane = this.props.airplane
    const conditionalRender = () => {
      if (airplane) {
        // return card after props mount (async is post initial component mount)
        return (
          <React.Fragment>
            <AirplaneCard showButtons={"false"} airplane={airplane} key={airplane.id} delete={this.props.deleteAirplane}/>
            {/* pass in current airplane to form, as prop */}
            <AirplaneEditForm airplane={airplane} />
          </React.Fragment>
        )
      } else {
        return (<div className="AirplaneCard"><p>Sorry, that aircraft was not found.</p></div>)
      }
    }

    return(
      <div className="AirplanesContainer">
        <h1>Aircraft Edit: Aircraft {airplane_id}</h1>
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
    airplane: state.airplanes.find(airplane => airplane.id === airplane_id)
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    // deleteAirplane: (airplane) => {dispatch(deleteAirplane(airplane) )},
    getAirplanes: () => {dispatch(getAirplanes() )}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(AirplaneEdit);