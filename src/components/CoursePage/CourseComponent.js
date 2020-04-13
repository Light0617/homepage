import React, { Component } from 'react';
import { Row, Container, Col, Card, Nav } from 'react-bootstrap';


import pic1 from '../../assets/courses/deep_learning_cer.png'
import pic2 from '../../assets/courses/Distributed_Programming.png'
import pic3 from '../../assets/courses/SoftwareDesignArchitecture.png'
import pic4 from '../../assets/courses/ProgrammingGo.png'
import pic5 from '../../assets/courses/AppliedDataScience.png'
import pic6 from '../../assets/courses/Web_everyone.png'

const course_link1 = 'https://www.coursera.org/specializations/deep-learning'
const course_link2 = 'https://www.coursera.org/specializations/pcdp'
const course_link3 = 'https://www.coursera.org/specializations/software-design-architecture'
const course_link4 = 'https://www.coursera.org/specializations/google-golang'
const course_link5 = 'https://www.coursera.org/specializations/data-science-python'
const course_link6 = 'https://www.coursera.org/specializations/web-design'

class Book extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="course" className="blog-style">
        <div className='u-center-text u-margin-bottom-big'>
          <h1>Course</h1>
        </div>
        <Container>
          <Row>
            <Col xl="4" lg="2" md="2" sm="1" className="hidden-xs-down">
            <Card className='course-card-style'>
              <Card.Img variant="top" src={pic1} className='course_cover' />
              <Card.Body>
                <Card.Title>Deep Learning</Card.Title>
                <Card.Link target='_blank' href={course_link1}>course</Card.Link>
                {/* <Nav.Link href="#disabled" disabled>Blog</Nav.Link> */}
              </Card.Body>
            </Card>
            </Col>
            <Col xl="4" lg="2" md="2" sm="1" className="hidden-xs-down">
            <Card className='course-card-style'>
              <Card.Img variant="top" src={pic2} className='course_cover'/>
              <Card.Body>
                <Card.Title>Parallel, Concurrent, and Distributed Programming in Java</Card.Title>
                <Card.Link target='_blank' href={course_link2}>course</Card.Link>
                {/* <Nav.Link href="#disabled" disabled>Blog</Nav.Link> */}
              </Card.Body>
            </Card>
            </Col>
            <Col xl="4" lg="2" md="2" sm="1" className="hidden-xs-down">
            <Card className='course-card-style'>
              <Card.Img variant="top" src={pic3} className='course_cover' />
              <Card.Body>
                <Card.Title>Software Design and Architecture</Card.Title>
                <Card.Link target='_blank' href={course_link3}>course</Card.Link>
                {/* <Nav.Link href="#disabled" disabled>Blog</Nav.Link> */}
              </Card.Body>
            </Card>
            </Col>
            </Row>
            <Row className="padding-top">
            <Col>
            <Card className='course-card-style'>
              <Card.Img variant="top" src={pic4} className='course_cover' />
              <Card.Body>
                <Card.Title>Software Design and Architecture</Card.Title>
                <Card.Link target='_blank' href={course_link4}>course</Card.Link>
                {/* <Nav.Link href="#disabled" disabled>Blog</Nav.Link> */}
              </Card.Body>
            </Card>
            
            </Col>
            <Col>
            <Card className='course-card-style'>
              <Card.Img variant="top" src={pic5} className='course_cover' />
              <Card.Body>
                <Card.Title>Software Design and Architecture</Card.Title>
                <Card.Link target='_blank' href={course_link5}>course</Card.Link>
                {/* <Nav.Link href="#disabled" disabled>Blog</Nav.Link> */}
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className='course-card-style'>
              <Card.Img variant="top" src={pic6} className='course_cover' />
              <Card.Body>
                <Card.Title>Software Design and Architecture</Card.Title>
                <Card.Link target='_blank' href={course_link6}>course</Card.Link>
                {/* <Nav.Link href="#disabled" disabled>Blog</Nav.Link> */}
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