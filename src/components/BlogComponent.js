import React, { Component } from 'react';
import { Row, Container, Col, Nav } from 'react-bootstrap';
import pic1 from '../assets/blog-tv.jpg'
import pic2 from '../assets/blog-art.jpg'
import pic3 from '../assets/blog-sde.jpg'

class Blog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="blog" className="blog-style">
        <div className='u-center-text u-margin-bottom-big'>
          <h1>Blog</h1>
        </div>
        <Container>
          <Row>
            <Col>
              <h3 className='heading-tertiary u-margin-bottom-small'> Technical Blog</h3>
              <p className='paragraphe'>
                As a software engineer, I am happy to share any technical stuff I faced before, 
                talk about some papers and online courses I love in the future. 
              </p>
              <h3 className='heading-tertiary u-margin-bottom-small'> Casual Blog</h3>
              <p className='paragraphe'>
                During leisure time, I am intersted in watching American TV Series,  
                movie and Japanese Anime. In the future, I will write more about interview experience,
                software engineer life in Silicon Valley.
              </p>
              <a target="_blank" href='https://medium.com/@arthurlee_73761/first-day-on-elasticsearch-c15002aa9539' className='btn-text'>Learn more &rarr;</a>
            </Col>
            <Col>
              <div className='composition'>
                <img src={pic1} alt='Photo 1' className='composition__photo composition__photo--p1' />
                <img src={pic2} alt='Photo 2' className='composition__photo composition__photo--p2' />
                <img src={pic3} alt='Photo 3' className='composition__photo composition__photo--p3' />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}
export default Blog;