import React, { Component } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='header-style' id='home'>
        <Nav defaultActiveKey="/home" as="ul" className="white-font-color">
          <Nav.Link href="#home" className="grey-font-color name-logo">Light Lee</Nav.Link>
          <Nav className="mr-auto">
            <sapn></sapn>
          </Nav>
          <Nav.Link href="#home" className="text-uppercase grey-font-color">home</Nav.Link>
          <Nav.Link href="#about" className="text-uppercase grey-font-color">about</Nav.Link>
          <Nav.Link href="#project" className="text-uppercase grey-font-color">project</Nav.Link>
          <Nav.Link href="#blog" className="text-uppercase grey-font-color">blog</Nav.Link>
          <Nav.Link href="#book" className="text-uppercase grey-font-color">books</Nav.Link>
          <Nav.Link href="#paper" className="text-uppercase grey-font-color">papers</Nav.Link>
          <Nav.Link href="#contact" className="text-uppercase grey-font-color">contact</Nav.Link>
        </Nav>
      </div>
    )
  }

}
export default Main;