import React, { Component } from 'react';
import { connect } from 'react-redux';

import AirplaneFormData from '../reducers/airplaneFormData';
import updateAirplaneFormData from '../actions/airplaneForm';

class AirplaneForm extends Component {

  handleonChange = (event) => {
   const {name, value} = event.target;
   let currentAirplaneFormData = Object.assign({}, this.props.airplaneFormData, {
     [name]: value,
   })

   this.props.updateAirplaneFormData(currentAirplaneFormData);
  }
  
  render() {
    const {name, seats, img_url, lesson_rate, identifier} = this.props.airplaneFormData;

    return(
      <form className="AirplaneForm">
        <p>Add your favorite aircraft!</p>
        <label>Make/Model</label>
        <input type="text" name="name" value={name} className="AirplaneFormInput" onChange={this.handleonChange}/> 
        <label>Seats</label>
        <input type="text" name="seats" value={seats} className="AirplaneFormInput" onChange={this.handleonChange}/>
        <label>Image URL(http://www...)</label>
        <input type="text" name="img_url" value={img_url} className="AirplaneFormInput" onChange={this.handleonChange}/>
        <label>Lesson Price Per Hour</label>
        <input type="text" name="lesson_rate" value={lesson_rate} className="AirplaneFormInput" onChange={this.handleonChange}/>
        <label>FAA identifier(N-Number)</label>
        <input type="text" name="identifier" value={identifier} className="AirplaneFormInput"  onChange={this.handleonChange}/>

        <input type="submit" className="AirplaneFormInput"/>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    airplaneFormData: state.airplaneFormData
  }
}

export default connect(mapStateToProps)(AirplaneForm);