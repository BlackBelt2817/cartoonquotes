import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SimpsonsQuotes from './SimpsonsQuotes';
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route path='/simpsons' component={ SimpsonsQuotes }/>
        </div>
      </Router>
    );
  }
}

export default App;
