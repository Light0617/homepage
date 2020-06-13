import React, { Component } from 'react';

import FreeCourses from './FreeCoursesComponent';
import CourseraCourses from './CourseraComponent';
import Podcasts from './PodCastComponent';

class Book extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.show_all) {
      return (
        <div id="course" className="blog-style">
          <FreeCourses/>
          <Podcasts/>
          <CourseraCourses/>
        </div>
      )
    }
    return (
      <div id="course" className="blog-style">
        <FreeCourses/>
        <CourseraCourses/>
      </div>
    )
  }

}
export default Book;