import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {NavBar} from './NavBar';
import {Home} from './Home';
import {BottomBanner} from './BottomBanner';
import './App.css';

const Header = () => {
  return (
    <header className="App-header">
      <h1 className="App-title">Welcome to Aviation Client</h1>
    </header>
  )
}


const About = () => {
  return (
    <div>
      ABOUT
    </div>
  )
}

// const App = () => {
//   return (
//     <Router>
//       <Route exact path="/" component={Home}/>
//     </Router>
//   )
// }

const App = (props) => {
  return (
    <Router>
      <div className="app">
        <Header />
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/actors" component={About} />

        <BottomBanner />
      </div>
    </Router>
  );
};

export default App;
