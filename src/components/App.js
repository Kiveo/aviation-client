import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {HeadNav} from './HeadNav';
import {Home} from './Home';
import {BottomBanner} from './BottomBanner';
import './App.css';

const About = () => {
  return (
    <div>
      ABOUT
    </div>
  )
}

const App = (props) => {
  return (
    <Router>
      <div className="app">
        <HeadNav />
        <Route exact path="/" component={Home} />
        <Route exact path="/actors" component={About} />

        <BottomBanner />
      </div>
    </Router>
  );
};

export default App;
