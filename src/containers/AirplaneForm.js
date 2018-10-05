import React, { Component } from 'react';

class AirplaneForm extends Component {
  render() {
    return(
      <form>
        Add your favorite aircraft!
        <input type="text" />
        <input type="submit" />
      </form>
    );
  }
}

export default AirplaneForm;