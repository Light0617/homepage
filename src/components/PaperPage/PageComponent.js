import React, { Component } from 'react';

import Header from '../HeaderComponent';
import Paper from './PaperComponent';
import Contact from '../ContactComponent';


class Page extends Component {
  render() {
    return (
      <div className="App">
        <div className='header-style paper-header-background' id='paper_header'>
          <Header />
        </div>
        <Paper />
        <Contact />
      </div>
    );
  }
}
export default Page;
