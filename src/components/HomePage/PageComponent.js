import React, { Component } from 'react';

import Header from '../HeaderComponent';
import Contact from '../ContactComponent';

import About from './AboutComponent';
import Paper from '../PaperPage/PaperComponent';
import Course from '../CoursePage/CourseComponent';
import Project from './ProjectComponent';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className='header-style home-header-background' id='home_header'>
          <Header />
        </div>
        <About />
        <Paper />
        <Course />
        <Project />
        <Contact/>
      </div>
    );
  }
}
export default Home;
