import React, { Component } from 'react';

import Header from '../HeaderComponent';
import Course from './CourseComponent';
import Contact from '../ContactComponent';


class Page extends Component {
  render() {
    return (
      <div className="App">
        <div className='header-style course-header-background' id='course_header'>
          <Header />
        </div>
        <Course />
        <Contact />
      </div>
    );
  }
}
export default Page;
