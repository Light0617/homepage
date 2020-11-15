import React, { Component } from 'react';
import { Row, Container, Col, Card, Nav } from 'react-bootstrap';
import pic1 from '../../assets/book1.jpg'
import pic2 from '../../assets/book2.jpg'
import pic3 from '../../assets/book3.jpg'

import pic4 from '../../assets/book4.jpg'
import pic5 from '../../assets/book5.jpg'
import pic6 from '../../assets/book6.jpg'

const title1 = 'Thinking, fast and slow';
const title2 = 'Why nations fail';
const title3 = 'Species';

const title4 = 'The Long View';
const title5 = 'On Writing Well';
const title6 = 'Humble Inquiry';

function BookCard(props) {
  return (
    <Col>
      <Card className="blog-card-style">
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Img variant="bottom" src={props.img} className="b-card-img" />
        </Card.Body>
        <Card.Body>
          <Nav.Link href={props.link} disabled>Blog</Nav.Link>
        </Card.Body>
      </Card>
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
        <Container>
          <div className='u-center-text u-margin-bottom-big'>
            <h1>Book</h1>
          </div>
          <div className='div-center'>
            <Row xl="3" lg="2" md="2" sm="1">
              <BookCard img={pic1} title={title1} link='#disabled' />
              <BookCard img={pic2} title={title2} link='#disabled' />
              <BookCard img={pic3} title={title3} link='#disabled' />
            </Row>
          </div>
          <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
              <BookCard img={pic4} title={title4} link='#disabled' />
              <BookCard img={pic5} title={title5} link='#disabled' />
              <BookCard img={pic6} title={title6} link='#disabled' />
          </Row>
        </Container>
      </div>
    )
  }

}
export default Book;