import React, { Component } from 'react';

import FreeCourses from './FreeCoursesComponent';
import CourseraCourses from './CourseraComponent';

class Book extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="course" className="blog-style">
        <FreeCourses/>
        <CourseraCourses/>
      </div>
    )
  }

}
export default Book;