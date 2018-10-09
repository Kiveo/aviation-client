import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Airplanes from '../containers/Airplanes';
import {BottomBanner} from './BottomBanner';
import './App.css';

const Header = () => {
  return (
    <header className="App-header">
      <h1 className="App-title">Welcome to Aviation Client</h1>
    </header>
  )
}

const Home = () => {
    return (
      <div className="App">
        <Header />
        <Airplanes />
        <BottomBanner />
      </div>
    );
  }

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
    </Router>
  )
}

export default App;
