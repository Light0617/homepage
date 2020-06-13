import React, { Component } from 'react';
import { Row, Container, Col, Table, Card, Tabs, Tab, Button } from 'react-bootstrap';


import pic1 from '../../assets/blog-tv.jpg'
import pic2 from '../../assets/blog-art.jpg'
import pic3 from '../../assets/blog-sde.jpg'

function BlogLink(props) {
  return(
    <div className="paper-text">{props.title} &nbsp;- &nbsp;
      <a className="card-link" target="_blank" href={props.link}>
        <span className="fa fa-external-link"></span>
      </a>
    </div>
  );
}

function MachineLearning() {
  const FintechStartupChina_link="https://medium.com/@arthurlee_73761/podcast-note-3-fintech-startup-in-china-a38c4e823ffd";
  const FintechStartupChina_title="Podcast note: Fintech Startup in China"
  return (
    <div className="div-left">
    <Table striped bordered hover>
      <tbody>
        <tr><td><BlogLink title={FintechStartupChina_title} link={FintechStartupChina_link}/></td></tr>
      </tbody>
    </Table>
    </div>
  );
}

function Life() {
  return (
    <Container>
          <Row>
            <Col id="blog_intro_left">
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
              <a target="_blank" href='/blog' className='btn-text'>Learn more &rarr;</a>
            </Col>
            <Col id="blog_intro_right">
              <div className='composition'>
                <img src={pic1} alt='Photo 1' className='composition__photo composition__photo--p1' />
                <img src={pic2} alt='Photo 2' className='composition__photo composition__photo--p2' />
                <img src={pic3} alt='Photo 3' className='composition__photo composition__photo--p3' />
              </div>
            </Col>
          </Row>
        </Container>
  );
}

function PodcastBlog() {
  return(
    <Container>
    <div className='u-center-text u-margin-bottom-big'>
      <h2>My review blogs.</h2>
    </div>
    <Tabs
      defaultActiveKey="podcast" transition={false} id="noanim-tab-example"
    >
      <Tab eventKey="podcast" title="podcast">
        <div className='u-center-text u-margin-bottom-huge_big'>
          <h1>podcast</h1>
          <MachineLearning/>
        </div>
      </Tab>
      <Tab eventKey="life" title="Life">
      <div className='u-center-text u-margin-bottom-big'>
        <h1>Casual Life</h1>
        <Life/>
      </div>
      </Tab>
    </Tabs> 
    </Container>
  )
}
export default PodcastBlog;