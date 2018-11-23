import React, { Component } from 'react';
import { connect } from 'react-redux';

import {updateAirplaneFormData} from '../actions/airplaneForm';
import { updateAirplane } from '../actions/airplanes';

class AirplaneEditForm extends Component {

  handleOnChange = (event) => {
   const {name, value} = event.target;
   let currentAirplaneFormData = Object.assign({}, this.props.airplaneFormData, {
     [name]: value
   })
   this.props.updateAirplaneFormData(currentAirplaneFormData);
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    let updatedAirplane = this.props.airplaneFormData
    updatedAirplane.id = this.props.airplane.id
    this.props.updateAirplane(updatedAirplane);
  }
  
  render() {
    const {name, seats, img_url, lesson_rate, identifier} = this.props.airplaneFormData;
    
    return(
      <React.Fragment >
        <form className="AirplaneForm" onSubmit={this.handleOnSubmit}>
          <h1>Add Aircraft Rental/Listing Details</h1>
          <label>Make/Model</label>
          <input type="text" name="name" value={name} className="AirplaneFormInput" onChange={this.handleOnChange} required pattern=".{3,}"/> 
          <label>Seats</label>
          <input type="text" name="seats" value={seats} className="AirplaneFormInput" onChange={this.handleOnChange}/>
          <label>Image URL(http://www...)</label>
          <input type="text" name="img_url" value={img_url} className="AirplaneFormInput" onChange={this.handleOnChange} />
          <label>Lesson Price Per Hour</label>
          <input type="text" name="lesson_rate" value={lesson_rate} className="AirplaneFormInput" onChange={this.handleOnChange}/>
          <label>FAA identifier(N-Number)</label>
          <input type="text" name="identifier" value={identifier} className="AirplaneFormInput"  onChange={this.handleOnChange} required/>

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