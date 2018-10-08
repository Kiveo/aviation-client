import React from 'react';
import Airplanes from '../containers/Airplanes';
import './App.css';

const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Aviation Client</h1>
        </header>
        <Airplanes />
      </div>
    );
  }

export default App;
