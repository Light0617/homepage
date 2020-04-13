import React, { Component } from 'react';

import Header from '../HeaderComponent';
import About from './AboutComponent';
import Project from './ProjectComponent';
import Blog from './BlogComponent';
import Contact from '../ContactComponent';


class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className='header-style home-header-background' id='home_header'>
          <Header />
        </div>
        <About />
        <Project />
        <Blog />
        <Contact/>
      </div>
    );
  }
}
export default Home;
