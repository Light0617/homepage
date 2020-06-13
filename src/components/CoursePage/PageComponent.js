import React, { Component } from 'react';

import Header from '../HeaderComponent';
import Course from './CourseComponent';
import Contact from '../ContactComponent';


class Page extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className='header-style course-header-background' id='course_header'>
          <Header />
        </div>
        <Course show_all={this.props.show_all}/>
        <Contact />
      </div>
    );
  }
}
export default Page;
