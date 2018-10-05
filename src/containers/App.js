import React, { Component } from 'react';

import Airplanes from './Airplanes';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Aviation Client</h1>
        </header>
        {/* {this.state.loading ? <h1>...Loading...</h1> : <Airplanes /> } */}
        <Airplanes />
      </div>
    );
  }
}

export default App;
