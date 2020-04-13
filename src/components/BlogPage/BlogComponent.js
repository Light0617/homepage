import React, { Component } from 'react';
import { Row, Container, Col, Nav } from 'react-bootstrap';
import pic1 from '../../assets/blog-tv.jpg'
import pic2 from '../../assets/blog-art.jpg'
import pic3 from '../../assets/blog-sde.jpg'

const project_link1 = "https://github.com/Light0617/CryptocurrencyDashboard";
const project_link2 = "https://github.com/Light0617/CryptocurrencyDashboard";
const project_link3 = "https://github.com/Light0617/neural_style_transfer_art";

class Blog extends Component {
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
              <a target="_blank" href={project_link1}>
                <img src={pic1} className='composition__photo'/>
              </a>
            </Col>
            <Col>
              <a target="_blank" href={project_link3}>
                <img src={pic2} className='composition__photo'/>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}
export default Blog;