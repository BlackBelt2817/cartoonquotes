import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const rickAndMorty = require('rick-and-morty');

class RickAndMortyMemes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pic: rickAndMorty.random()
        };
    }
    render() {
        return (
            <div>
                <img alt='WUBBA LUBBA DUB DUB' src={this.state.pic} />
                <Button>Get Schwifty</Button>
            </div>
        );
    }
}

export default RickAndMortyMemes;