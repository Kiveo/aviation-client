import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { HeadNav } from './HeadNav';
import { Home } from './Home';
import { About } from './About';
import './App.css';

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <HeadNav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
};

export default App;
