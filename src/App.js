import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SimpsonsQuotes from './SimpsonsQuotes';
import RickSanchezQuotes from './RickSanchezQuotes';
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/*<NavBar />*/}
          <SimpsonsQuotes />
          <Route path='/simpsonsquotes' component={ SimpsonsQuotes }/>
          {/*<Route path='/ricksanchezquotes' component={ RickSanchezQuotes }/>*/}
        </div>
      </Router>
    );
  }
}

export default App;
