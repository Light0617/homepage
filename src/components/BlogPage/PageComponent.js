import React, { Component } from 'react';

import Header from '../HeaderComponent';
import Blog from './BlogComponent';
import Contact from '../ContactComponent';


class Page extends Component {
  render() {
    return (
      <div className="App">
         <div className='header-style blog-header-background' id='blog_header'>
          <Header />
         </div>
        {/* <Blog /> */}
        <Contact/>
      </div>
    );
  }
}
export default Page;
