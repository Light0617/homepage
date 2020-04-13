import React, { Component } from 'react';

import Header from '../HeaderComponent';
import Book from './CourseComponent';
import Contact from '../ContactComponent';


class Page extends Component {
  render() {
    return (
      <div className="App">
        <div className='header-style course-header-background' id='course_header'>
          <Header />
        </div>
        <Book />
        <Contact />
      </div>
    );
  }
}
export default Page;
