import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap'

export default class SimpsonsQuotes extends Component {
  constructor() {
    super();
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
        <h5 style={{display: 'flex', justifyContent: 'center'}}>{this.state.quote}</h5>
        <h3 style={{display: 'flex', justifyContent: 'center'}}>{this.state.character}</h3>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <img style={{maxWidth: '40%', maxHeight: '40%'}} src={this.state.image} alt={this.state.character} />
        </div>
        <div style={{position: 'fixed', bottom: '5%', width:'100%', display: 'flex', justifyContent: 'center'}}>
          <Button style={{background: '#FFD90F', color: 'black', textAlign: 'center', width:'20%'}} onClick={this.newQuote.bind(this)}>D'OH!</Button>
        </div>
      </div>
    );
  }
}