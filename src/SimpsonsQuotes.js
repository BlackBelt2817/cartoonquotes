import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class SimpsonsQuotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
      character: null,
      image: null,
      characterDirection: null
    };
  }

  newQuote() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      console.log(`${res.data['0'].character} said: "${res.data['0'].quote}"`);
      this.setState({
      quote: res.data['0'].quote,
      character: res.data['0'].character,
      image: res.data['0'].image,
      characterDirection: res.data['0'].characterDirection
    })})
  }

  componentDidMount() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(res => {
        console.log(`${res.data['0'].character} said: "${res.data['0'].quote}"`);
        this.setState({
        quote: res.data['0'].quote,
        character: res.data['0'].character,
        image: res.data['0'].image,
        characterDirection: res.data['0'].characterDirection
      })})
    }

  render() {
    return(
      <div>
        <h1 style={{display: 'flex', justifyContent: 'center'}}>{this.state.quote}</h1>
        <h4 style={{display: 'flex', justifyContent: 'center'}}>{this.state.character}</h4>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <img style={{maxWidth: '40%', maxHeight: '40%'}} src={this.state.image} alt={this.state.character} />
        </div>
        <div style={{position: 'fixed', bottom: '5%', width:'100%', display: 'flex', justifyContent: 'center'}}>
          <Button style={{background: '#FFD90F', color: 'black', textAlign: 'center', width: 350, height: 80}} onClick={this.newQuote.bind(this)}>D'OH!</Button>
        </div>
      </div>
    );
  }
}

// borderTopColor: 'black', borderTopStyle: 'solid'