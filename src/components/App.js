import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { HeadNav } from './HeadNav';
import { Home } from './Home';
import { About } from './About';
import AirplaneForm from '../containers/AirplaneForm';
import Airplanes from '../containers/Airplanes';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <Router>  
        <React.Fragment>
          <HeadNav />
          <Route exact path="/" component={Home} />
          <Route path='/airplanes' component={Airplanes} />
          <Route exact path="/about" component={About} />
          <Route exact path="/new" component={AirplaneForm} />
        </React.Fragment>
      </Router>
    </div>
  );
};

export default App;
