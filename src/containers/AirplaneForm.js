import React, { Component } from 'react';
import { connect } from 'react-redux';

import AirplaneFormData from '../reducers/airplaneFormData';

class AirplaneForm extends Component {
  render() {
    const {name, seats, img_url, lesson_rate, identifier} = this.props.airplaneFormData;

    return(
      <form className="AirplaneForm">
        <p>Add your favorite aircraft!</p>
        <label>Make/Model</label>
        <input type="text" name="name" value={name} /> 
        <label>Seats</label>
        <input type="text" name="seats" value={seats} />
        <label>Image URL(http://www...)</label>
        <input type="text" name="img_url" value={img_url} />
        <label>Lesson Price Per Hour</label>
        <input type="text" name="lesson_rate" value={lesson_rate} />
        <label>FAA identifier(N-Number)</label>
        <input type="text" name="identifier" value={identifier} />

        <input type="submit" />
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