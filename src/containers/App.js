import React, { Component } from 'react';
import './App.css';
import Airplanes from './Airplanes';

// MOCKUP ARRAY PLACEHOLDER FOR API INFO
// const airplanes = [
//   {
//     name: 'Airplane One',
//     seats: 30,
//     img_url: "https://www.classfmonline.com/kitnes/cache/images/640x400/0/1.8628264.jpg",
//     lesson_rate: null,
//     identifier: "N-AF01"
//   },
//   {
//     name: 'Gulfstream G500',
//     seats: 20,
//     img_url: "https://www.libertyjet.com/img/aircraft/Gulfstream-G500-ext.jpg",
//     lesson_rate: 28760,
//     identifier: "N-BETA2"
//   },
//   {
//     name: 'Cessna 172',
//     seats: 4,
//     img_url: 'http://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/4v/kd/p04vkddn.jpg',
//     lesson_rate: 175,
//     identifier: "N17201"
//   }
// ]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airplanes: []
    }

  }
  // once mounted, fetch from API via lifecycle method
  componentDidMount() {
    fetch('http://localhost:3001/api/airplanes')
      .then(response => response.json() )
      .then(airplanes => this.setState({ airplanes }) )
    }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Aviation Client</h1>
        </header>
        <Airplanes airplanes={this.state.airplanes} />
      </div>
    );
  }
}

export default App;
