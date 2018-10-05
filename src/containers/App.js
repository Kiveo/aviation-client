import React, { Component } from 'react';
import './App.css';
import Airplanes from './Airplanes';

const API_URL = process.env.REACT_APP_API_URL

class App extends Component {

  // once mounted, fetch from API via lifecycle method: AFTER initial render
  componentDidMount() {
    fetch(`${API_URL}/airplanes`)
      .then(response => response.json() )
      // .then(airplanes => this.setState({ airplanes, loading: false }) )
    }
    
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
