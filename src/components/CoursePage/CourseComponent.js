import React, { Component } from 'react';
import { Row, Container, Col, Card, Tabs, Tab } from 'react-bootstrap';

import sp1 from '../../assets/courses/specializations/deep_learning_cer.png'
import sp2 from '../../assets/courses/specializations/Distributed_Programming.png'
import sp3 from '../../assets/courses/specializations/SoftwareDesignArchitecture.png'
import sp4 from '../../assets/courses/specializations/ProgrammingGo.png'
import sp5 from '../../assets/courses/specializations/AppliedDataScience.png'
import sp6 from '../../assets/courses/specializations/Web_everyone.png'

import ml1 from '../../assets/courses/MachineLearning/1MachineLearning.png'
import ml2 from '../../assets/courses/MachineLearning/2SequenceModels.png'
import ml3 from '../../assets/courses/MachineLearning/3StructuringMachineLearning.png'
import ml4 from '../../assets/courses/MachineLearning/4ConvolutionalNeuralNetworks.png'
import ml5 from '../../assets/courses/MachineLearning/5ImprovingDeepNeuralNetworks.png'
import ml6 from '../../assets/courses/MachineLearning/6NeuralNetworksDeepLearning.png'
import ml7 from '../../assets/courses/MachineLearning/7ArtificialIntelligence.png'
import ml8 from '../../assets/courses/MachineLearning/8MatrixFactorization.png'
import ml9 from '../../assets/courses/MachineLearning/9NearestNeighborCollaborativeFiltering.png'
import ml10 from '../../assets/courses/MachineLearning/10NonPersonalizedandContent-Based.png'
import ml11 from '../../assets/courses/MachineLearning/11RecommenderSystemsEvaluationMetrics.png'

import sde1 from '../../assets/courses/SDE/1ConcurrencyGo.png'
import sde2 from '../../assets/courses/SDE/2ParallelProgrammingJava.png'
import sde3 from '../../assets/courses/SDE/3ConcurrentProgrammingJava.png'
import sde4 from '../../assets/courses/SDE/4DistributedProgrammingJava.png'
import sde5 from '../../assets/courses/SDE/5FunctionalProgramDesignScala.png'
import sde6 from '../../assets/courses/SDE/6FunctionsMethodsInterfacesGo.png'
import sde7 from '../../assets/courses/SDE/7Distributed_Programming.png'
import sde8 from '../../assets/courses/SDE/8BigDataAnalysiswithScalaSpark.png'
import sde9 from '../../assets/courses/SDE/9ObjectOrientedDesign.png'
import sde10 from '../../assets/courses/SDE/10DesignPatterns.png'
import sde11 from '../../assets/courses/SDE/11GoogleCloudPlatformFundamentals.png'
import sde12 from '../../assets/courses/SDE/12ServiceOrientedArchitecture.png'
import sde13 from '../../assets/courses/SDE/13SoftwareArchitecture.png'
import sde14 from '../../assets/courses/SDE/14SoftwareDesignArchitecture.png'
import sde15 from '../../assets/courses/SDE/15ProgrammingGo.png'
import sde16 from '../../assets/courses/SDE/16GettingStartedGo.png'

const sp_link1 = 'https://www.coursera.org/specializations/deep-learning'
const sp_link2 = 'https://www.coursera.org/specializations/pcdp'
const sp_link3 = 'https://www.coursera.org/specializations/software-design-architecture'
const sp_link4 = 'https://www.coursera.org/specializations/google-golang'
const sp_link5 = 'https://www.coursera.org/specializations/data-science-python'
const sp_link6 = 'https://www.coursera.org/specializations/web-design'

const ml_link1 = 'https://www.coursera.org/specializations/deep-learning'
const ml_link2 = 'https://www.coursera.org/specializations/pcdp'
const ml_link3 = 'https://www.coursera.org/specializations/software-design-architecture'
const ml_link4 = 'https://www.coursera.org/specializations/google-golang'
const ml_link5 = 'https://www.coursera.org/specializations/data-science-python'
const ml_link6 = 'https://www.coursera.org/specializations/web-design'
const ml_link7 = 'https://www.coursera.org/specializations/deep-learning'
const ml_link8 = 'https://www.coursera.org/specializations/pcdp'
const ml_link9 = 'https://www.coursera.org/specializations/software-design-architecture'
const ml_link10 = 'https://www.coursera.org/specializations/google-golang'
const ml_link11 = 'https://www.coursera.org/specializations/data-science-python'


const sde_link1 = 'https://www.coursera.org/specializations/deep-learning'
const sde_link2 = 'https://www.coursera.org/specializations/pcdp'
const sde_link3 = 'https://www.coursera.org/specializations/software-design-architecture'
const sde_link4 = 'https://www.coursera.org/specializations/google-golang'
const sde_link5 = 'https://www.coursera.org/specializations/deep-learning'
const sde_link6 = 'https://www.coursera.org/specializations/pcdp'
const sde_link7 = 'https://www.coursera.org/specializations/software-design-architecture'
const sde_link8 = 'https://www.coursera.org/specializations/google-golang'
const sde_link9 = 'https://www.coursera.org/specializations/deep-learning'
const sde_link10 = 'https://www.coursera.org/specializations/pcdp'
const sde_link11 = 'https://www.coursera.org/specializations/software-design-architecture'
const sde_link12 = 'https://www.coursera.org/specializations/google-golang'
const sde_link13 = 'https://www.coursera.org/specializations/deep-learning'
const sde_link14 = 'https://www.coursera.org/specializations/pcdp'
const sde_link15 = 'https://www.coursera.org/specializations/software-design-architecture'
const sde_link16 = 'https://www.coursera.org/specializations/google-golang'


function CourseCard(props) {
  return (
    <Col xl="4" lg="2" md="2" sm="1" className="hidden-xs-down">
      <Card className='course-card-style'>
        <Card.Img variant="top" src={props.img} className='course_cover' />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Link target='_blank' href={props.link}>course</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

function Specialization() {
    return (
      <Container>
          <Row>
            <CourseCard img = {sp1} title = 'Deep Learning' link= {sp_link1}/>
            <CourseCard img = {sp2} title = 'Parallel, Concurrent, and Distributed Programming in Java' link= {sp_link2}/>
            <CourseCard img = {sp3} title = 'Software Design and Architecture' link= {sp_link3}/>
          </Row>
          <Row className='padding-top'>
            <CourseCard img = {sp4} title = 'Programming with Golang' link= {sp_link4}/>
            <CourseCard img = {sp5} title = 'Applied Data Science with Python' link= {sp_link5}/>
            <CourseCard img = {sp6} title = 'Web Design' link= {sp_link6}/>
          </Row>
        </Container>
    );
}

function ML_courses() {
  return (
    <Container>
        <Row>
          <CourseCard img = {ml1} title = 'Machine Learning' link= {ml_link1}/>
          <CourseCard img = {ml2} title = 'Sequence Models' link= {ml_link2}/>
          <CourseCard img = {ml3} title = 'Structuring Machine Learning Projects' link= {ml_link3}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {ml4} title = 'Convolutional Neural Networks' link= {ml_link4}/>
          <CourseCard img = {ml5} title = 'Improving Deep Neural Networks' link= {ml_link5}/>
          <CourseCard img = {ml6} title = 'Neural Networks and Deep Learning' link= {ml_link6}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {ml7} title = 'Artificial Intelligence' link= {ml_link7}/>
          <CourseCard img = {ml8} title = 'Matrix Factorization' link= {ml_link8}/>
          <CourseCard img = {ml9} title = 'Nearest Neighbor Collaborative Filtering' link= {ml_link9}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {ml10} title = 'Recommendation Systems with Non-Personalizedand Content-Based' link= {ml_link10}/>
          <CourseCard img = {ml11} title = 'Recommender Systems: Evaluation Metrics' link= {ml_link11}/>
        </Row>
      </Container>
  );
}

function SDE_courses() {
  return (
    <Container>
        <Row>
          <CourseCard img = {sde1} title = 'Concurrency in Go' link= {ml_link1}/>
          <CourseCard img = {sde2} title = 'Sequence Models' link= {ml_link2}/>
          <CourseCard img = {sde3} title = 'Structuring Machine Learning Projects' link= {ml_link3}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {sde4} title = 'Convolutional Neural Networks' link= {ml_link4}/>
          <CourseCard img = {sde5} title = 'Improving Deep Neural Networks' link= {ml_link5}/>
          <CourseCard img = {sde6} title = 'Neural Networks and Deep Learning' link= {ml_link6}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {sde7} title = 'Artificial Intelligence' link= {ml_link7}/>
          <CourseCard img = {sde8} title = 'Matrix Factorization' link= {ml_link8}/>
          <CourseCard img = {sde9} title = 'Nearest Neighbor Collaborative Filtering' link= {ml_link9}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {sde10} title = 'Recommendation Systems with Non-Personalizedand Content-Based' link= {ml_link10}/>
          <CourseCard img = {sde11} title = 'Recommender Systems: Evaluation Metrics' link= {ml_link11}/>
          <CourseCard img = {sde12} title = 'Recommender Systems: Evaluation Metrics' link= {ml_link11}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {sde13} title = 'Recommendation Systems with Non-Personalizedand Content-Based' link= {ml_link10}/>
          <CourseCard img = {sde14} title = 'Recommender Systems: Evaluation Metrics' link= {ml_link11}/>
          <CourseCard img = {sde15} title = 'Recommender Systems: Evaluation Metrics' link= {ml_link11}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {sde16} title = 'Recommendation Systems with Non-Personalizedand Content-Based' link= {ml_link10}/>
        </Row>
      </Container>
  );
}

class Book extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="course" className="blog-style">
        <div className='u-center-text u-margin-bottom-big'>
          <h1>Course</h1>
          <h2>I completed 6 specializations and 61 courses.</h2>
        </div>
        <Tabs
          defaultActiveKey="home" transition={false} id="noanim-tab-example"
        >
          <Tab eventKey="home" title="Specializations">
          <h1>Specializations</h1>
          <Specialization/>
          </Tab>
          <Tab eventKey="ml" title="Machine Learning">
          <h1>Machine Learning</h1>
          <ML_courses/>
          </Tab>
          <Tab eventKey="SDE" title="Software Engineer">
            <h1>Software Engineer</h1>
            <SDE_courses/>
          </Tab>
          <Tab eventKey="web" title="Web Programming">
            <h1>Web Programming</h1>
          </Tab>
          <Tab eventKey="basic-cs" title="Basic Computer Science">
            <h1>Basic Computer Science</h1>
          </Tab>
          <Tab eventKey="data-analysis" title="Data Analysis">
            <h1>Data Analysis</h1>
          </Tab>
          <Tab eventKey="others" title="Others">
          <h1>Others</h1>
          </Tab>
        </Tabs>
        
      </div>
    )
  }

}
export default Book;