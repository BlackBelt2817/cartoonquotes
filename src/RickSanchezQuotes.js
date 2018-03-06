import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

export default class RickSanchezQuotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
    };
  }

  newQuote() {
    axios.get('http://loremricksum.com/api/?paragraphs=1&quotes=1')
    .then(res => {console.log(res.data)});
  }

  componentDidMount() {
    axios.get('http://loremricksum.com/api/?paragraphs=1&quotes=1')
    .then(res => console.log(res));
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.quote}</h1>
        <Button onClick={this.clickhere()}>
          STUFF
        </Button>
      </div>
    );
  }
}