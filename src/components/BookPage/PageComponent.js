import React, { Component } from 'react';

import Header from '../HeaderComponent';
import Book from './BookComponent';
import Contact from '../ContactComponent';


class Page extends Component {
  render() {
    return (
      <div className="App">
        <div className='header-style book-header-background' id='book_header'>
          <Header />
        </div>
        <Book />
        <Contact />
      </div>
    );
  }
}
export default Page;
