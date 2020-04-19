import React, { Component } from 'react';
import { Row, Container, Col, Nav, Card, Tabs, Tab, Button } from 'react-bootstrap';

import pic1 from '../../assets/blog-tv.jpg'
import pic2 from '../../assets/blog-art.jpg'
import pic3 from '../../assets/blog-sde.jpg'

const ml_link1 = 'https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/splitnet-architecture-for-ad-candidate-ranking.html';
const ml_link2 = 'https://blog.twitter.com/engineering/en_us/topics/insights/2019/improving-engagement-on-digital-ads-with-delayed-feedback.html';

const infra_link1 = 'https://blog.twitter.com/engineering/en_us/a/2016/resilient-ad-serving-at-twitter-scale.html';

function BlogCard(props) {
  return (
    <Col>
      <Card className='blog-card-style'>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <Card.Link href={props.link}>Blog Link</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

function MachineLearning() {
  return (
    <div className='div-center'>
      <Row xl="6" lg="2" md="2" sm="1" className="hidden-xs-down blog-card-row-style">
        <BlogCard link={ml_link1} title = 'A SplitNet architecture for ad candidate ranking' 
          text= 'Twitter applied SplitNet architecture to control model accuracy and computing loading.'/>
          <BlogCard link={ml_link2} title = 'Improving engagement on digital ads with delayed feedback' 
          text= 'Twitter applied fake negative weighted loss to improve online learning system.'/>
      </Row>
    </div>
  );
}
function Infrastrucutre() {
  return (
    <div className='div-center'>
      <Row xl="6" lg="2" md="2" sm="1" className="hidden-xs-down blog-card-row-style">
        <BlogCard link={infra_link1} title = 'Resilient ad serving at Twitter-scale' 
          text= 'Twitter applied control theory to achieve resiliency (availability), scalability, resource-utilization, and revenue-optimality.'/>
      </Row>
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

class Blog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="course" className="blog-style">
        <div className='u-center-text u-margin-bottom-big'>
          <h1>Blog</h1>
          <h2>I collect some my favoritate blogs.</h2>
        </div>
        <Tabs
          defaultActiveKey="home" transition={false} id="noanim-tab-example"
        >
          <Tab eventKey="home" title="Machine Learning">
            <div className='u-center-text u-margin-bottom-big'>
              <h1>Machine Learning Blogs</h1>
              <MachineLearning/>
            </div>
          </Tab>
          <Tab eventKey="ml" title="Infrastrucutre">
          <div className='u-center-text u-margin-bottom-big'>
          <h1>Infrastrucutre Blogs</h1>
            <Infrastrucutre/>
          </div>
          </Tab>
          <Tab eventKey="life" title="Life">
          <div className='u-center-text u-margin-bottom-big'>
            <h1>Casual Life</h1>
            <Life/>
          </div>
          </Tab>
        </Tabs>
        
      </div>
    )
  }

}
export default Blog;