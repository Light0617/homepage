import React, { Component } from 'react';

import Header from '../HeaderComponent';
import Friend from './FriendComponent';
import Contact from '../ContactComponent';


class Page extends Component {
  render() {
    return (
      <div className="App">
        <div className='header-style book-header-background' id='book_header'>
          <Header />
        </div>
        <Friend />
        <Contact />
      </div>
    );
  }
}
export default Page;
