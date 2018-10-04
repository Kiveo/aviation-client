import React, { Component } from 'react';
import './App.css';
import Airplanes from './Airplanes';

const airplanes = [
  {
    name: 'Airplane One',
    seats: 30,
    img_url: "https://www.classfmonline.com/kitnes/cache/images/640x400/0/1.8628264.jpg",
    lesson_rate: null,
    identifier: "N-AF01"
  },
  {
    name: 'Gulfstream G500',
    seats: 20,
    img_url: "https://www.libertyjet.com/img/aircraft/Gulfstream-G500-ext.jpg",
    lesson_rate: 28760,
    identifier: "N-BETA2"
  },
  {
    name: 'Cessna 172',
    seats: 4,
    img_url: 'http://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/4v/kd/p04vkddn.jpg',
    lesson_rate: 175,
    identifier: "N17201"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Aviation Client</h1>
        </header>
        <Airplanes airplanes={airplanes}/>
      </div>
    );
  }
}

export default App;
