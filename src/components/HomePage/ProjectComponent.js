import React, { Component } from 'react';
import { Row, Container, Col, Nav } from 'react-bootstrap';
import pic1 from '../../assets/project-crypto.jpg'
import pic2 from '../../assets/project-tw.jpg'
import pic3 from '../../assets/project-style.jpg'

const project_link1 = "https://github.com/Light0617/CryptocurrencyDashboard";
const project_link2 = "https://github.com/Light0617/CryptocurrencyDashboard";
const project_link3 = "https://github.com/Light0617/neural_style_transfer_art";

class Project extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="project" className="project-style">
        <div className='u-center-text u-margin-bottom-big'>
          <h1>Project</h1>
        </div>
        <Container>
          <Row>
            <Col id="project_intro_left">
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
              <a target="_blank" href='https://github.com/Light0617' className='btn-text'>Learn more &rarr;</a>
            </Col>
            <Col id="project_intro_right">
              <div className='composition'>
              <a target="_blank" href={project_link1}>
                <img src={pic1} className='composition__photo composition__photo--p1'/>
              </a>
              <a target="_blank" href={project_link2}>
                <img src={pic2} className='composition__photo composition__photo--p2'/>
              </a>
              <a target="_blank" href={project_link3}>
                <img src={pic3} className='composition__photo composition__photo--p3'/>
              </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}
export default Project;