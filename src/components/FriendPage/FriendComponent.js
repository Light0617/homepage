import React, { Component } from 'react';
import { Row, Container, Col, Card, Nav } from 'react-bootstrap';
import pic1 from '../../assets/kevin.jpeg'

const title1 = 'Kevin Coleman';

const link1 = 'https://www.kcoleman.me/morning-stack/';

function FriendCard(props) {
  return (
    <Col>
      <Card className="blog-card-style">
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Img variant="bottom" src={props.img} className="b-card-img" />
        </Card.Body>
        <Card.Body>
          <Nav.Link href={props.link}>Blog Link</Nav.Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

class Friend extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="friend" className="blog-style">
        <Container>
          <div className='u-center-text u-margin-bottom-big'>
            <h1>Friends</h1>
          </div>
          <div className='div-center'>
            <Row xl="3" lg="2" md="2" sm="1">
              <FriendCard img={pic1} title={title1} link={link1} />
            </Row>
          </div>
        </Container>
      </div>
    )
  }

}
export default Friend;