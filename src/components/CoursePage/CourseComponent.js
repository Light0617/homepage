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
import sde7 from '../../assets/courses/SDE/7BigDataAnalysiswithScalaSpark.png'
import sde8 from '../../assets/courses/SDE/8ObjectOrientedDesign.png'
import sde9 from '../../assets/courses/SDE/9GettingStartedGo.png'
import sde10 from '../../assets/courses/SDE/10DesignPatterns.png'
import sde11 from '../../assets/courses/SDE/11GoogleCloudPlatformFundamentals.png'
import sde12 from '../../assets/courses/SDE/12ServiceOrientedArchitecture.png'
import sde13 from '../../assets/courses/SDE/13SoftwareArchitecture.png'

import web1 from '../../assets/courses/web_programming/1Front-EndWebDevelopmentwithReact.png'
import web2 from '../../assets/courses/web_programming/2Server-sideDevelopment.png'
import web3 from '../../assets/courses/web_programming/3Front-EndJavaScriptFrameworksAngular.png'
import web4 from '../../assets/courses/web_programming/4Bootstrap4.png'
import web5 from '../../assets/courses/web_programming/5AdvancedStylingwithResponsiveDesign.png'
import web6 from '../../assets/courses/web_programming/6InteractivitywithJavaScript.png'
import web7 from '../../assets/courses/web_programming/7CSS3.png'
import web8 from '../../assets/courses/web_programming/8WebDesignforEverybodyCapstone.png'
import web9 from '../../assets/courses/web_programming/9IntroductiontoHTML5.png'

import cs1 from '../../assets/courses/basic_cs/1AlgorithmsOnGraphs.png'
import cs2 from '../../assets/courses/basic_cs/2AdvancedDataStructuresinJava.png'
import cs3 from '../../assets/courses/basic_cs/3AlgorithmsonStrings.png'
import cs4 from '../../assets/courses/basic_cs/4DataStructuresandPerformance.png'
import cs5 from '../../assets/courses/basic_cs/5ObjectOrientedProgramminginJava.png'
import cs6 from '../../assets/courses/basic_cs/6HadoopPlatformandApplicationFramework.png'
import cs7 from '../../assets/courses/basic_cs/7AlgorithmicToolbox.png'
import cs8 from '../../assets/courses/basic_cs/8DataStructures.png'
import cs9 from '../../assets/courses/basic_cs/9IntroductiontoBigData.png'
import cs10 from '../../assets/courses/basic_cs/10MasteringtheSoftwareEngineeringInterview.png'

import da1 from '../../assets/courses/DA/1AppliedMachineLearninginPython.png'
import da2 from '../../assets/courses/DA/2AppliedSocialNetworkAnalysisPython.png'
import da3 from '../../assets/courses/DA/3AppliedTextMiningPython.png'
import da4 from '../../assets/courses/DA/4PracticalMachineLearning.png'
import da5 from '../../assets/courses/DA/5StatisticalInference.png'
import da6 from '../../assets/courses/DA/6RegressionModels.png'
import da7 from '../../assets/courses/DA/7UsingDatabaseswithPython.png'
import da8 from '../../assets/courses/DA/8PythonDataStructures.png'
import da9 from '../../assets/courses/DA/9applied_plot.png'
import da10 from '../../assets/courses/DA/10ExploratoryDataAnalysis.png'
import da11 from '../../assets/courses/DA/11GettingCleaningData.png'
import da12 from '../../assets/courses/DA/12DataSciencePython.png'
import da13 from '../../assets/courses/DA/13ProgrammingforEverybody.png'
import da14 from '../../assets/courses/DA/14RProgramming.png'
import da15 from '../../assets/courses/DA/15ReproducibleResearch.png'
import da16 from '../../assets/courses/DA/16DSToolbox.png'
import da17 from '../../assets/courses/DA/17UsingPythontoAccessWebData.png'

import other1 from '../../assets/courses/other/1DevelopmentalPsychology.png'

const sp_link1 = 'https://www.coursera.org/specializations/deep-learning'
const sp_link2 = 'https://www.coursera.org/specializations/pcdp'
const sp_link3 = 'https://www.coursera.org/specializations/software-design-architecture'
const sp_link4 = 'https://www.coursera.org/specializations/google-golang'
const sp_link5 = 'https://www.coursera.org/specializations/data-science-python'
const sp_link6 = 'https://www.coursera.org/specializations/web-design'

const ml_link1 = 'https://www.coursera.org/learn/machine-learning'
const ml_link2 = 'https://www.coursera.org/learn/nlp-sequence-models'
const ml_link3 = 'https://www.coursera.org/learn/machine-learning-projects'
const ml_link4 = 'https://www.coursera.org/learn/convolutional-neural-networks'
const ml_link5 = 'https://www.coursera.org/learn/deep-neural-network'
const ml_link6 = 'https://www.coursera.org/learn/neural-networks-deep-learning'
const ml_link7 = 'https://www.coursera.org/learn/rengong-zhineng'
const ml_link8 = 'https://www.coursera.org/learn/matrix-factorization'
const ml_link9 = 'https://www.coursera.org/learn/collaborative-filtering'
const ml_link10 = 'https://www.coursera.org/learn/recommender-systems-introduction'
const ml_link11 = 'https://www.coursera.org/learn/recommender-metrics'

const sde_link1 = 'https://www.coursera.org/learn/golang-concurrency'
const sde_link2 = 'https://www.coursera.org/learn/parallel-programming-in-java'
const sde_link3 = 'https://www.coursera.org/learn/concurrent-programming-in-java'
const sde_link4 = 'https://www.coursera.org/learn/distributed-programming-in-java'
const sde_link5 = 'https://www.coursera.org/learn/progfun2'
const sde_link6 = 'https://www.coursera.org/learn/golang-functions-methods'
const sde_link7 = 'https://www.coursera.org/learn/scala-spark-big-data'
const sde_link8 = 'https://www.coursera.org/learn/object-oriented-design'
const sde_link9 = 'https://www.coursera.org/learn/golang-getting-started'
const sde_link10 = 'https://www.coursera.org/learn/design-patterns'
const sde_link11 = 'https://www.coursera.org/learn/gcp-fundamentals'
const sde_link12 = 'https://www.coursera.org/learn/service-oriented-architecture'
const sde_link13 = 'https://www.coursera.org/learn/software-architecture'


const web_link1 = 'https://www.coursera.org/learn/front-end-react'
const web_link2 = 'https://www.coursera.org/learn/server-side-nodejs'
const web_link3 = 'https://www.coursera.org/learn/angular'
const web_link4 = 'https://www.coursera.org/learn/bootstrap-4'
const web_link5 = 'https://www.coursera.org/learn/responsivedesign'
const web_link6 = 'https://www.coursera.org/learn/javascript'
const web_link7 = 'https://www.coursera.org/learn/introcss'
const web_link8 = 'https://www.coursera.org/learn/web-design-project'
const web_link9 = 'https://www.coursera.org/learn/html'

const cs_link1 = 'https://www.coursera.org/learn/algorithms-on-graphs'
const cs_link2 = 'https://www.coursera.org/learn/advanced-data-structures'
const cs_link3 = 'https://www.coursera.org/learn/algorithms-on-strings'
const cs_link4 = 'https://www.coursera.org/learn/data-structures-optimizing-performance'
const cs_link5 = 'https://www.coursera.org/learn/object-oriented-java?specialization=java-object-oriented'
const cs_link6 = 'https://www.coursera.org/learn/hadoop'
const cs_link7 = 'https://www.coursera.org/learn/algorithmic-toolbox'
const cs_link8 = 'https://www.coursera.org/learn/data-structures'
const cs_link9 = 'https://www.coursera.org/learn/big-data-introduction'
const cs_link10 = 'https://www.coursera.org/learn/cs-tech-interview?specialization=java-object-oriented'

const da_link1 = 'https://www.coursera.org/learn/python-machine-learning'
const da_link2 = 'https://www.coursera.org/learn/python-social-network-analysis'
const da_link3 = 'https://www.coursera.org/learn/python-text-mining'
const da_link4 = 'https://www.coursera.org/learn/practical-machine-learning'
const da_link5 = 'https://www.coursera.org/learn/statistical-inference'
const da_link6 = 'https://www.coursera.org/learn/regression-models'
const da_link7 = 'https://www.coursera.org/learn/python-databases'
const da_link8 = 'https://www.coursera.org/learn/python-data'
const da_link9 = 'https://www.coursera.org/learn/python-plotting'
const da_link10 = 'https://www.coursera.org/learn/exploratory-data-analysis'
const da_link11 = 'https://www.coursera.org/learn/data-cleaning'
const da_link12 = 'https://www.coursera.org/learn/python-data-analysis'
const da_link13 = 'https://www.coursera.org/learn/python'
const da_link14 = 'https://www.coursera.org/learn/r-programming'
const da_link15 = 'https://www.coursera.org/learn/reproducible-research'
const da_link16 = 'https://www.coursera.org/learn/data-scientists-tools'
const da_link17 = 'https://www.coursera.org/learn/python-network-data'

const other_link1 = 'https://www.coursera.org/learn/developmental-psychology?courseAccomplishmentCurrentPage=1&coursesWithoutCertificateCurrentPage=2'

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
          <CourseCard img = {sde1} title = 'Concurrency in Go' link= {sde_link1}/>
          <CourseCard img = {sde2} title = 'Parallel Programming in Java' link= {sde_link2}/>
          <CourseCard img = {sde3} title = 'Concurrent Programming in Java' link= {sde_link3}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {sde4} title = 'Distributed Programming in Java' link= {sde_link4}/>
          <CourseCard img = {sde5} title = 'Functional Program Design Scala' link= {sde_link5}/>
          <CourseCard img = {sde6} title = 'Functions Methods Interfaces in Go' link= {sde_link6}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {sde7} title = 'Big Data Analysis with Scala Spark' link= {sde_link7}/>
          <CourseCard img = {sde8} title = 'Object Oriented Design' link= {sde_link8}/>
          <CourseCard img = {sde9} title = 'Getting Started Go' link= {sde_link9}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {sde10} title = 'Design Patterns' link= {sde_link10}/>
          <CourseCard img = {sde11} title = 'Google Cloud Platform Fundamentals' link= {sde_link11}/>
          <CourseCard img = {sde12} title = 'Service Oriented Architecture' link= {sde_link12}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {sde13} title = 'Software Architecture' link= {sde_link13}/>
        </Row>
      </Container>
  );
}

function Web_courses() {
  return (
    <Container>
        <Row>
          <CourseCard img = {web1} title = 'Front-End WebDevelopment with React' link= {web_link1}/>
          <CourseCard img = {web2} title = 'Server-side Development' link= {web_link2}/>
          <CourseCard img = {web3} title = 'Front-End WebDevelopment with Angular' link= {web_link3}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {web4} title = 'Bootstrap4' link= {web_link4}/>
          <CourseCard img = {web5} title = 'Advanced Styling with Responsive Design' link= {web_link5}/>
          <CourseCard img = {web6} title = 'Interactivity with JavaScript' link= {web_link6}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {web7} title = 'CSS3' link= {web_link7}/>
          <CourseCard img = {web8} title = 'Web Design for Everybody Capstone' link= {web_link8}/>
          <CourseCard img = {web9} title = 'Introduction to HTML5' link= {web_link9}/>
        </Row>
      </Container>
  );
}

function CS_courses() {
  return (
    <Container>
        <Row>
          <CourseCard img = {cs1} title = 'Algorithms On Graphs' link= {cs_link1}/>
          <CourseCard img = {cs2} title = 'Advanced Data Structures in Java' link= {cs_link2}/>
          <CourseCard img = {cs3} title = 'Algorithms on Strings' link= {cs_link3}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {cs4} title = 'Data Structures and Performance' link= {cs_link4}/>
          <CourseCard img = {cs5} title = 'Object Oriented Programming in Java' link= {cs_link5}/>
          <CourseCard img = {cs6} title = 'Hadoop Platform and Application Framework' link= {cs_link6}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {cs7} title = 'Algorithmic Toolbox' link= {cs_link7}/>
          <CourseCard img = {cs8} title = 'Data Structures' link= {cs_link8}/>
          <CourseCard img = {cs9} title = 'Introduction to Big Data' link= {cs_link9}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {cs10} title = 'Mastering the Software Engineering Interview' link= {cs_link10}/>
        </Row>
      </Container>
  );
}

function DA_courses() {
  return (
    <Container>
        <Row>
          <CourseCard img = {da1} title = 'Applied Machine Learning in Python' link= {da_link1}/>
          <CourseCard img = {da2} title = 'Applied Social Network Analysis in Python' link= {da_link2}/>
          <CourseCard img = {da3} title = 'Applied Text Mining in Python' link= {da_link3}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {da4} title = 'Practical Machine Learning' link= {da_link4}/>
          <CourseCard img = {da5} title = 'Statistical Inference' link= {da_link5}/>
          <CourseCard img = {da6} title = 'Regression Models' link= {da_link6}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {da7} title = 'Using Databases with Python' link= {da_link7}/>
          <CourseCard img = {da8} title = 'Python Data Structures' link= {da_link8}/>
          <CourseCard img = {da9} title = 'Applied Plot' link= {da_link9}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {da10} title = 'Exploratory Data Analysis' link= {da_link10}/>
          <CourseCard img = {da11} title = 'Getting and Cleaning Data' link= {da_link11}/>
          <CourseCard img = {da12} title = 'Introduction to Data Science in Python' link= {da_link12}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {da13} title = 'Programming for Everybody' link= {da_link13}/>
          <CourseCard img = {da14} title = 'R Programming' link= {da_link14}/>
          <CourseCard img = {da15} title = 'Reproducible Research' link= {da_link15}/>
        </Row>
        <Row className='padding-top'>
          <CourseCard img = {da16} title = 'The Data Scientist’s Toolbox' link= {da_link16}/>
          <CourseCard img = {da17} title = 'Using Python to Access Web Data' link= {da_link17}/>
        </Row>
      </Container>
  );
}

function OTHER_courses() {
  return (
    <Container>
        <Row>
          <CourseCard img = {other1} title = 'Developmental Psychology' link= {other_link1}/>
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
            <div className='u-center-text u-margin-bottom-big'>
              <h1>Specializations</h1>
              <Specialization/>
            </div>
          </Tab>
          <Tab eventKey="ml" title="Machine Learning">
          <div className='u-center-text u-margin-bottom-big'>
          <h1>Machine Learning</h1>
          <ML_courses/>
          </div>
          </Tab>
          <Tab eventKey="SDE" title="Software Engineer">
          <div className='u-center-text u-margin-bottom-big'>
            <h1>Software Engineer</h1>
            <SDE_courses/>
          </div>
          </Tab>
          <Tab eventKey="web" title="Web Programming">
          <div className='u-center-text u-margin-bottom-big'>
            <h1>Web Programming</h1>
            <Web_courses/>
          </div>
          </Tab>
          <Tab eventKey="basic-cs" title="Basic Computer Science">
          <div className='u-center-text u-margin-bottom-big'>
          <h1>Basic Computer Science</h1>
            <CS_courses/>
          </div>
          </Tab>
          <Tab eventKey="data-analysis" title="Data Analysis">
          <div className='u-center-text u-margin-bottom-big'>
          <h1>Data Analysis</h1>
            <DA_courses/>
          </div>
          </Tab>
          <Tab eventKey="others" title="Others">
          <div className='u-center-text u-margin-bottom-big'>
          <h1>Others</h1>
            <OTHER_courses/>
          </div>
          </Tab>
        </Tabs>
        
      </div>
    )
  }

}
export default Book;