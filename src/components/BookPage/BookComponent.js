import React, { Component } from 'react';
import { Row, Container, Col, Card, Nav } from 'react-bootstrap';
import pic1 from '../../assets/book1.jpg'
import pic2 from '../../assets/book2.jpg'
import pic3 from '../../assets/book3.jpg'

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
        <Container>
          <Row>
            <Col>
            <Card className='book-card-style'>
              <Card.Img variant="top" src={pic1} className='book_cover' />
              <Card.Body>
                <Card.Title>Thinking, fast and slow</Card.Title>
                <Nav.Link href="#disabled" disabled>Blog</Nav.Link>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className='book-card-style'>
              <Card.Img variant="top" src={pic2} className='book_cover'/>
              <Card.Body>
                <Card.Title>Why nations fail</Card.Title>
                <Nav.Link href="#disabled" disabled>Blog</Nav.Link>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className='book-card-style'>
              <Card.Img variant="top" src={pic3} className='book_cover' />
              <Card.Body>
                <Card.Title>Species</Card.Title>
                <Nav.Link href="#disabled" disabled>Blog</Nav.Link>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}
export default Book;