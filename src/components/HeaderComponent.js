import React, { Component } from 'react';
import { Nav, Navbar} from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Nav defaultActiveKey="/home" as="ul" className="white-font-color">
        <Nav.Link href="#home" className="grey-font-color name-logo">KuangHsuan Lee</Nav.Link>
        <Nav className="mr-auto">
        </Nav>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav2" />
          <Navbar.Collapse id="basic-navbar-nav2">
            <Nav.Link href="/home" className="text-uppercase grey-font-color">home</Nav.Link>
            <Nav.Link href="/home#about" className="text-uppercase grey-font-color">about</Nav.Link>
            <Nav.Link href="/home#project" className="text-uppercase grey-font-color">project</Nav.Link>
            <Nav.Link href="/blog" className="text-uppercase grey-font-color">blog</Nav.Link>
            <Nav.Link href="/book" className="text-uppercase grey-font-color">book</Nav.Link>
            <Nav.Link href="/course" className="text-uppercase grey-font-color">course</Nav.Link>
            <Nav.Link href="#contact" className="text-uppercase grey-font-color">contact</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </Nav>
    )
  }

}
export default Header;