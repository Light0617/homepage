import React, { Component } from 'react';
import { Row, Container, Col, Nav, Card, Tabs, Tab, Button } from 'react-bootstrap';
import MyBlog from './MyBlogComponent';

const bert_link1="https://text-machine-lab.github.io/blog/2020/bert-secrets/?utm_campaign=Thought%20Leadership&utm_content=122769302&utm_medium=social&utm_source=linkedin&hss_channel=lis-NG8w66b_uw";
const bert_link2="https://medium.com/dair-ai/does-bert-actually-understand-language-550dd07f38d3";
const ml_link1 = 'https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/splitnet-architecture-for-ad-candidate-ranking.html';
const ml_link2 = 'https://blog.twitter.com/engineering/en_us/topics/insights/2019/improving-engagement-on-digital-ads-with-delayed-feedback.html';
const recom_link1="https://medium.com/recombee-blog/machine-learning-for-recommender-systems-part-1-algorithms-evaluation-and-cold-start-6f696683d0ed";

const infra_link1 = 'https://blog.twitter.com/engineering/en_us/a/2016/resilient-ad-serving-at-twitter-scale.html';

const career_link1="https://towardsdatascience.com/ml-ops-machine-learning-as-an-engineering-discipline-b86ca4874a3f";

function BlogCard(props) {
  return (
    <Col>
      <Card className='blog-card-style'>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle>{props.subtitle}</Card.Subtitle>
        </Card.Body>
        <Card.Body>
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
      <Row xl="3" lg="2" md="2" sm="1" className="hidden-xs-down blog-card-row-style">
        <BlogCard link={bert_link1} title = 'The Dark Secrets of BERT'
          subtitle="BERT" 
          text= 'BERT is heavily overparametrized and BERT does not need to be all that smart for these tasks.'/>
        <BlogCard link={bert_link2} title = 'What does BERT look at?'
          subtitle="BERT" 
          text= 'He discussed surface-level attention, individual attention head and probing classifier for BERT.'/>
        <BlogCard link={ml_link1} title = 'A SplitNet architecture for ad candidate ranking'
          subtitle="Ads" 
          text= 'Twitter applied SplitNet architecture to control model accuracy and computing loading.'/>
      </Row>
      <Row xl="3" lg="2" md="2" sm="1" className="hidden-xs-down blog-card-row-style padding-top">
        <BlogCard link={ml_link2} title = 'Improving engagement on digital ads with delayed feedback'
          subtitle="Ads" 
          text= 'Twitter applied fake negative weighted loss to improve online learning system.'/>
        <BlogCard link={recom_link1} title = 'Machine Learning for Recommender systems — Part 1'
          subtitle="Recommendation" 
          text= 'Basic Method for recommendation system..'/>
      </Row>
    </div>
  );
}
function Infrastrucutre() {
  return (
    <div className='div-center'>
      <Row xl="3" lg="2" md="2" sm="1" className="hidden-xs-down blog-card-row-style">
        <BlogCard link={infra_link1} title = 'Resilient ad serving at Twitter-scale'
          subtitle="Ads" 
          text= 'Twitter applied control theory to achieve resiliency (availability), scalability, resource-utilization, and revenue-optimality.'/>
      </Row>
    </div>
  );
}

function CareerGrowth() {
  return (
    <div className='div-center'>
      <Row xl="3" lg="2" md="2" sm="1" className="hidden-xs-down blog-card-row-style">
        <BlogCard link={career_link1} title = 'ML Ops: Machine Learning as an Engineering Discipline'
          subtitle="Machine Learning" 
          text= 'He talks about how important for ML Ops role in real world.'/>
      </Row>
    </div>
  );
}

function CollectedBlog() {
  return(
    <Container>
    <div className='u-center-text u-margin-bottom-big'>
      <h2>I collect some my favorite blogs.</h2>
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
      <Tab eventKey="career" title="Career Growth">
      <div className='u-center-text u-margin-bottom-big'>
      <h1>Career Growth</h1>
        <CareerGrowth/>
      </div>
      </Tab>
    </Tabs> 
    </Container>
  )
}

class Blog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="course" className="blog-style">
        <MyBlog/>
        <CollectedBlog/>
      </div>
    )
  }

}
export default Blog;