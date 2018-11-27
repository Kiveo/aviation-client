import React, { Component } from 'react';
import { connect } from 'react-redux';

import {updateAirplaneFormData} from '../actions/airplaneForm';
import { updateAirplane } from '../actions/airplanes';

class AirplaneEditForm extends Component {
  
  handleOnSubmit = (event) => {
    event.preventDefault();
    let updatedAirplane = {};
    updatedAirplane.name = event.target.name.value;
    updatedAirplane.seats = event.target.seats.value;
    updatedAirplane.img_url = event.target.img_url.value;
    updatedAirplane.lesson_rate = event.target.lesson_rate.value;
    updatedAirplane.identifier = event.target.identifier.value;

    updatedAirplane.id = this.props.airplane.id
    this.props.updateAirplane(updatedAirplane);
  }
  
  render() {
    const {name, seats, img_url, lesson_rate, identifier} = this.props.airplane;
    
    return(
      <React.Fragment >
        <form className="AirplaneForm" onSubmit={this.handleOnSubmit}>
          <h1>Add Aircraft Rental/Listing Details</h1>
          <label>Make/Model</label>
          <input type="text" name="name" defaultValue={name} className="AirplaneFormInput"  required pattern=".{1,}"/> 
          <label>Seats</label>
          <input type="text" name="seats" defaultValue={seats} className="AirplaneFormInput" />
          <label>Image URL(http://www...)</label>
          <input type="text" name="img_url" defaultValue={img_url} className="AirplaneFormInput"  />
          <label>Lesson Price Per Hour</label>
          <input type="text" name="lesson_rate" defaultValue={lesson_rate} className="AirplaneFormInput" />
          <label>FAA identifier(N-Number)</label>
          <input type="text" name="identifier" defaultValue={identifier} className="AirplaneFormInput"   required/>

          <input type="submit" className="AirplaneFormInput" />
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    airplaneFormData: state.airplaneFormData
  }
}

export default connect(mapStateToProps, {
  updateAirplaneFormData,
  updateAirplane
} )(AirplaneEditForm);