import React, { Component } from 'react';
import { Row, Container, Col, Card, Nav } from 'react-bootstrap';
import pic1 from '../../assets/book1.jpg'
import pic2 from '../../assets/book2.jpg'
import pic3 from '../../assets/book3.jpg'

const title1 = 'Thinking, fast and slow';
const title2 = 'Why nations fail';
const title3 = 'Species';

function BookCard(props) {
  return (
    <Col>
      <div className='card'>
        <div className='card__side'>
          <img src={props.img} className='card-img'/>
          <div className='card__details'>
            <ul>
              <li>{props.title}</li>
              <li><a target="_blank"  href={props.link} className='btn btn--blue disabled'>Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Col>
  )
}

class Book extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="book" className="blog-style">
        <div className='u-center-text u-margin-bottom-big'>
          <h1>Book</h1>
        </div>
        <div className='div-center'>
          <Row xl="4" lg="2" md="2" sm="1" className="hidden-xs-down">
            <BookCard img = {pic1} title = {title1} link= '#disabled'/>
            <BookCard img = {pic2} title = {title2} link= '#disabled'/>
            <BookCard img = {pic3} title = {title3} link= '#disabled'/>
          </Row>
        </div>
      </div>
    )
  }

}
export default Book;