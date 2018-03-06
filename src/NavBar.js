import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.SimpsonsDropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Quotes
        </DropdownToggle>
        <DropdownMenu>
          <a href='/'><DropdownItem>Home</DropdownItem></a>
          <DropdownItem divider />
          <a href='/simpsons'><DropdownItem>Simpsons Quotes</DropdownItem></a>
          <a href='/ricksanchez'><DropdownItem>Rick Sanchez</DropdownItem></a>
        </DropdownMenu>
      </ButtonDropdown>
      
    );
  }
}
