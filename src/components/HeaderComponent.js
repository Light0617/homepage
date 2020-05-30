import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <Nav defaultActiveKey="/" as="ul" className="white-font-color">
        <Nav.Link href="/" className="grey-font-color name-logo nav-link active">KuangHsuan Lee</Nav.Link>
        <Nav className="mr-auto">
        </Nav>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav2" />
          <Navbar.Collapse id="basic-navbar-nav2">
            <NavLink to="/" className="nav-link text-uppercase grey-font-color">home</NavLink>
            {/* <Nav.Link href="#about" className="text-uppercase grey-font-color">about</Nav.Link>
            <Nav.Link href="#project" className="text-uppercase grey-font-color">project</Nav.Link>
            <Nav.Link href="#blog" className="text-uppercase grey-font-color">blog</Nav.Link>
            <Nav.Link href="#book" className="text-uppercase grey-font-color">book</Nav.Link>
            <Nav.Link href="#course" className="text-uppercase grey-font-color">course</Nav.Link> */}
            <NavLink to="/paper" className="nav-link text-uppercase grey-font-color">paper</NavLink>
            <NavLink to="/blog" className="nav-link text-uppercase grey-font-color">blog</NavLink>
            <NavLink to="/course" className="nav-link text-uppercase grey-font-color">course</NavLink>
            <NavLink to="/book" className="nav-link text-uppercase grey-font-color">book</NavLink>
            {/* <Nav.Link href="#contact" className="text-uppercase grey-font-color">contact</Nav.Link> */}
          </Navbar.Collapse>
        </Navbar>
      </Nav>
      <div className="home-cover-content">
          <p>
            K.H. Lee,
          <br/>Machine Learning Engineer &nbsp;
          <span className="fa fa-yelp fa-lg"></span>
          <br/>@San Francisco.
          </p>  
          <a className="icon-style" target="_blank" href="https://www.linkedin.com/in/khl1147/">
            <span className="fa fa-linkedin fa-lg"></span>
          </a>
          <a className="icon-style" target="_blank" href="https://github.com/Light0617/">
            <span className="fa fa-github fa-lg"></span>
          </a>
          <a className="icon-style" target="_blank" href="https://www.facebook.com/kuanghsuan.lee.3">
            <span className="fa fa-facebook fa-lg"></span>
          </a>
          <a className="icon-style" target="_blank" href="https://www.instagram.com/arthurnone6406/?hl=en">
            <span className="fa fa-instagram fa-lg"></span>
          </a>
      </div>
      </div>
    )
  }

}
export default Header;