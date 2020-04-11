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
        </div>
        <Row>
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
                  <a target="_blank"  href='https://www.linkedin.com/in/khl1147/' className='btn btn--white'> Let's Link!</a>
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
                  <a target="_blank"  href='https://github.com/Light0617/' className='btn btn--white'> Let's Code!</a>
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
                  <a target="_blank"  href='https://www.facebook.com/kuanghsuan.lee.3?ref=bookmarks' className='btn btn--white'> Let's Connect!</a>
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
                  <a target="_blank"  href='https://www.instagram.com/arthurnone6406/' className='btn btn--white'> Let's Ins!</a>
                </div>
              </div>
            </div>
          </Col>

        </Row>

        <div className='u-center-text u-margin-top-huge'>
          <a href='#' className='btn btn--green'>Back</a>
        </div>
      </section>
    )
  }

}
export default Contact;