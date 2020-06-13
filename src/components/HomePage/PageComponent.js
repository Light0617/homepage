import React, { Component } from 'react';

import Header from '../HeaderComponent';
import Contact from '../ContactComponent';

import About from './AboutComponent';
import Paper from '../PaperPage/PaperComponent';
import Course from '../CoursePage/CourseComponent';
import Project from './ProjectComponent';

class Home extends Component {
  render() {
    const show_all_ = false;
    return (
      <div className="App">
        <div className='header-style home-header-background' id='home_header'>
          <Header />
        </div>
        <About />
        <Paper />
        <Course show_all={show_all_}/>
        <Project />
        <Contact/>
      </div>
    );
  }
}
export default Home;
