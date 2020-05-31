import React, { Component } from 'react';
import { Row, Container, Col, Nav } from 'react-bootstrap';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="contact-style" id='contact'>
        <div className='u-center-text u-margin-bottom-big'>
          <h1>Contact</h1>
          <div className="col-12 align-self-center div-center">
            <div className="text-center">
              <a className="btn btn-social-icon btn-linkedin" target="_blank" href="https://www.linkedin.com/in/khl1147/">
                <span className="fa fa-linkedin"></span>
              </a>
              <a className="btn btn-social-icon btn-github" target="_blank" href="https://github.com/Light0617/">
                <span className="fa fa-github"></span>
              </a>
              <a className="btn btn-social-icon btn-facebook" target="_blank" href="https://www.facebook.com/kuanghsuan.lee.3">
                <span className="fa fa-facebook"></span>
              </a>
              <a className="btn btn-social-icon btn-instagram" target="_blank" href="https://www.instagram.com/arthurnone6406/?hl=en">
                <span className="fa fa-instagram"></span>
              </a>
              <a className="btn btn-social-icon" target="_blank" href="mailto:light11470617@gmail.com">
                <span className="fa fa-envelope-o"></span>
              </a>
            </div>
          </div>
        </div>
        <Container>
          <Row xl="4" lg="2" md="2" sm="1" className="hidden-xs-down">
            <Col>
              <div className='card'>
                <div className='card__side card__side--front'>
                  <div className='card__picture card__picture--1'>
                    &nbsp;
                </div>
                  <h4 className='card__heading'>
                    <span className='card__heading-span card__heading-span--1'>
                      Linkedin
                  </span>
                  </h4>
                  <div className='card__details'>
                    <ul>
                      <li>Computer Science</li>
                      <li>Machine Learning</li>
                      <li>Finance</li>
                      <li>Psychology</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-1'>
                  <div className='card__cta'>
                    <a target="_blank" href='https://www.linkedin.com/in/khl1147/' className='btn btn--white contact-btn'> Let's Link!</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className='card'>
                <div className='card__side card__side--front'>
                  <div className='card__picture card__picture--2'>
                    &nbsp;
                </div>
                  <h4 className='card__heading'>
                    <span className='card__heading-span card__heading-span--2'>
                      Github
                  </span>
                  </h4>
                  <div className='card__details'>
                    <ul>
                      <li>Ｄeep Learning</li>
                      <li>Web Programming</li>
                      <li>Online Courses Excercise</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-2'>
                  <div className='card__cta'>
                    <a target="_blank" href='https://github.com/Light0617/' className='btn btn--white contact-btn'> Let's Code!</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className='card'>
                <div className='card__side card__side--front'>
                  <div className='card__picture card__picture--3'>
                    &nbsp;
                </div>
                  <h4 className='card__heading'>
                    <span className='card__heading-span card__heading-span--3'>
                      Facebook
                  </span>
                  </h4>
                  <div className='card__details'>
                    <ul>
                      <li>San Francisco</li>
                      <li>SunnyVale</li>
                      <li>San Diego</li>
                      <li>Taipei</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-3'>
                  <div className='card__cta'>
                    <a target="_blank" href='https://www.facebook.com/kuanghsuan.lee.3?ref=bookmarks' className='btn btn--white contact-btn'> Let's Connect!</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className='card'>
                <div className='card__side card__side--front'>
                  <div className='card__picture card__picture--4'>
                    &nbsp;
                </div>
                  <h4 className='card__heading'>
                    <span className='card__heading-span card__heading-span--4'>
                      Instagram
                  </span>
                  </h4>
                  <div className='card__details'>
                    <ul>
                      <li>Food</li>
                      <li>Art</li>
                      <li>Coffee</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-4'>
                  <div className='card__cta'>
                    <a target="_blank" href='https://www.instagram.com/arthurnone6406/' className='btn btn--white contact-btn'> Let's Ins!</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className='u-center-text u-margin-top-huge'>
          <a href='#' className='btn btn--green'>Back</a>
        </div>
      </section>
    )
  }

}
export default Contact;