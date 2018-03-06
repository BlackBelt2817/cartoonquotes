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
          More Quotes
        </DropdownToggle>
        <DropdownMenu>
          <a href='/'><DropdownItem>Home</DropdownItem></a>
          <DropdownItem divider />
          <a href='/simpsonsquotes'><DropdownItem>Simpsons Quotes</DropdownItem></a>
          {/*<a href='/ricksanchezquotes'><DropdownItem>Rick Sanchez</DropdownItem></a>*/}
        </DropdownMenu>
      </ButtonDropdown>
      
    );
  }
}
