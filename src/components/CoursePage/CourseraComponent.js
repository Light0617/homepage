import React from 'react';
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
const sp_title1 = 'Depp Learning';
const sp_title2 = 'Parallel, Concurrent, and Distributed Programming in Java';
const sp_title3 = 'Software Design and Architecture';
const sp_title4 = 'Programming with Golang';
const sp_title5 = 'Applied Data Science with Python';
const sp_title6 = 'Web Design';

const ml_link1 = 'https://www.coursera.org/learn/machine-learning';
const ml_link2 = 'https://www.coursera.org/learn/nlp-sequence-models';
const ml_link3 = 'https://www.coursera.org/learn/machine-learning-projects';
const ml_link4 = 'https://www.coursera.org/learn/convolutional-neural-networks';
const ml_link5 = 'https://www.coursera.org/learn/deep-neural-network';
const ml_link6 = 'https://www.coursera.org/learn/neural-networks-deep-learning';
const ml_link7 = 'https://www.coursera.org/learn/rengong-zhineng';
const ml_link8 = 'https://www.coursera.org/learn/matrix-factorization';
const ml_link9 = 'https://www.coursera.org/learn/collaborative-filtering';
const ml_link10 = 'https://www.coursera.org/learn/recommender-systems-introduction';
const ml_link11 = 'https://www.coursera.org/learn/recommender-metrics';
const ml_title1 = 'Machine Learning';
const ml_title2 = 'Sequence Models';
const ml_title3 = 'Structuring Machine Learning Projects';
const ml_title4 = 'Convolutional Neural Networks';
const ml_title5 = 'Improving Deep Neural Networks';
const ml_title6 = 'Neural Networks and Deep Learning';
const ml_title7 = 'Artificial Intelligence';
const ml_title8 = 'Matrix Factorization';
const ml_title9 = 'Nearest Neighbor Collaborative Filtering';
const ml_title10 = 'Introduction to Recommender Systems: Non-Personalized and Content-Based';
const ml_title11 = 'Recommender Systems: Evaluation Metrics';

const sde_link1 = 'https://www.coursera.org/learn/golang-concurrency';
const sde_link2 = 'https://www.coursera.org/learn/parallel-programming-in-java';
const sde_link3 = 'https://www.coursera.org/learn/concurrent-programming-in-java';
const sde_link4 = 'https://www.coursera.org/learn/distributed-programming-in-java';
const sde_link5 = 'https://www.coursera.org/learn/progfun2';
const sde_link6 = 'https://www.coursera.org/learn/golang-functions-methods';
const sde_link7 = 'https://www.coursera.org/learn/scala-spark-big-data';
const sde_link8 = 'https://www.coursera.org/learn/object-oriented-design';
const sde_link9 = 'https://www.coursera.org/learn/golang-getting-started';
const sde_link10 = 'https://www.coursera.org/learn/design-patterns';
const sde_link11 = 'https://www.coursera.org/learn/gcp-fundamentals';
const sde_link12 = 'https://www.coursera.org/learn/service-oriented-architecture';
const sde_link13 = 'https://www.coursera.org/learn/software-architecture';
const sde_title1 = 'Concurrency in Go';
const sde_title2 = 'Parallel Programming in Java';
const sde_title3 = 'Concurrent Programming in Java';
const sde_title4 = 'Distributed Programming in Java';
const sde_title5 = 'Functional Program Design Scala';
const sde_title6 = 'Functions Methods Interfaces in Go';
const sde_title7 = 'Big Data Analysis with Scala Spark';
const sde_title8 = 'Object Oriented Design';
const sde_title9 = 'Getting Started Go';
const sde_title10 = 'Design Patterns';
const sde_title11 = 'Google Cloud Platform Fundamentals';
const sde_title12 = 'Service Oriented Architecture';
const sde_title13 = 'Software Architecture';

const web_link1 = 'https://www.coursera.org/learn/front-end-react';
const web_link2 = 'https://www.coursera.org/learn/server-side-nodejs';
const web_link3 = 'https://www.coursera.org/learn/angular';
const web_link4 = 'https://www.coursera.org/learn/bootstrap-4';
const web_link5 = 'https://www.coursera.org/learn/responsivedesign';
const web_link6 = 'https://www.coursera.org/learn/javascript';
const web_link7 = 'https://www.coursera.org/learn/introcss';
const web_link8 = 'https://www.coursera.org/learn/web-design-project';
const web_link9 = 'https://www.coursera.org/learn/html';
const web_title1 = 'Front-End WebDevelopment with React';
const web_title2 = 'Server-side Development';
const web_title3 = 'Front-End WebDevelopment with Angular';
const web_title4 = 'Bootstrap4';
const web_title5 = 'Advanced Styling with Responsive Design';
const web_title6 = 'Interactivity with JavaScript';
const web_title7 = 'CSS3';
const web_title8 = 'Web Design for Everybody Capstone';
const web_title9 = 'Introduction to HTML5';

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
const cs_title1 = 'Algorithms On Graphs';
const cs_title2 = 'Advanced Data Structures in Java';
const cs_title3 = 'Algorithms on Strings';
const cs_title4 = 'Data Structures and Performance';
const cs_title5 = 'Object Oriented Programming in Java';
const cs_title6 = 'Hadoop Platform and Application Framework';
const cs_title7 = 'Algorithmic Toolbox';
const cs_title8 = 'Data Structures';
const cs_title9 = 'Introduction to Big Data';
const cs_title10 = 'Mastering the Software Engineering Interview';

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

const other_link1 = 'https://www.coursera.org/learn/developmental-psychology?courseAccomplishmentCurrentPage=1&coursesWithoutCertificateCurrentPage=2';

function CourseCard(props) {
    return (
        <Col>
            <Card className="course-card-style">
                <Card.Img variant="bottom" src={props.img} className="c-card-img" />
                <Card.Body>
                    <Card.Link href={props.link}><span className="fa fa-university fa-lg"></span></Card.Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

function Specialization() {
    return (
        <div className='div-center'>
            <Row xl="3" lg="2" md="2" sm="1" className="hidden-xs-down">
                <CourseCard img={sp1} title={sp_title1} link={sp_link1} />
                <CourseCard img={sp2} title={sp_title2} link={sp_link2} />
                <CourseCard img={sp3} title={sp_title3} link={sp_link3} />
            </Row>
            <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
                <CourseCard img={sp4} title={sp_title4} link={sp_link4} />
                <CourseCard img={sp5} title={sp_title5} link={sp_link5} />
                <CourseCard img={sp6} title={sp_title6} link={sp_link6} />
            </Row>
        </div>
    );
}

function ML_courses() {
    return (
        <div className='div-center'>
            <Row xl="3" lg="2" md="2" sm="1" className="hidden-xs-down">
                <CourseCard img={ml1} title={ml_title1} link={ml_link1} />
                <CourseCard img={ml2} title={ml_title2} link={ml_link2} />
                <CourseCard img={ml3} title={ml_title3} link={ml_link3} />
            </Row>
            <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
                <CourseCard img={ml4} title={ml_title4} link={ml_link4} />
                <CourseCard img={ml5} title={ml_title5} link={ml_link5} />
                <CourseCard img={ml6} title={ml_title6} link={ml_link6} />
            </Row>
            <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
                <CourseCard img={ml7} title={ml_title7} link={ml_link7} />
                <CourseCard img={ml8} title={ml_title8} link={ml_link8} />
                <CourseCard img={ml9} title={ml_title9} link={ml_link9} />
            </Row>
            <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
                <CourseCard img={ml10} title={ml_title10} link={ml_link10} />
                <CourseCard img={ml11} title={ml_title11} link={ml_link11} />
            </Row>
        </div>
    );
}

function SDE_courses() {
    return (
        <div className='div-center'>
            <Row xl="3" lg="2" md="2" sm="1" className="hidden-xs-down">
                <CourseCard img={sde1} title={sde_title1} link={sde_link1} />
                <CourseCard img={sde2} title={sde_title2} link={sde_link2} />
                <CourseCard img={sde3} title={sde_title3} link={sde_link3} />
            </Row>
            <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
                <CourseCard img={sde5} title={sde_title5} link={sde_link5} />
                <CourseCard img={sde6} title={sde_title6} link={sde_link6} />
                <CourseCard img={sde7} title={sde_title7} link={sde_link7} />
            </Row>
            <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
                <CourseCard img={sde9} title={sde_title9} link={sde_link9} />
                <CourseCard img={sde10} title={sde_title10} link={sde_link10} />
                <CourseCard img={sde11} title={sde_title11} link={sde_link11} />
            </Row>
            <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
                <CourseCard img={sde4} title={sde_title4} link={sde_link4} />
                <CourseCard img={sde8} title={sde_title8} link={sde_link8} />
                <CourseCard img={sde12} title={sde_title12} link={sde_link12} />
            </Row>
            <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
                <CourseCard img={sde13} title={sde_title13} link={sde_link13} />
            </Row>
        </div>
    );
}

function Web_courses() {
    return (
        <div className='div-center'>
            <Row xl="3" lg="2" md="2" sm="1" className="hidden-xs-down">
                <CourseCard img={web1} title={web_title1} link={web_link1} />
                <CourseCard img={web2} title={web_title2} link={web_link2} />
                <CourseCard img={web3} title={web_title3} link={web_link3} />
            </Row>
            <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
                <CourseCard img={web5} title={web_title5} link={web_link5} />
                <CourseCard img={web6} title={web_title6} link={web_link6} />
                <CourseCard img={web7} title={web_title7} link={web_link7} />
            </Row>
            <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
                <CourseCard img={web4} title={web_title4} link={web_link4} />
                <CourseCard img={web8} title={web_title8} link={web_link8} />
                <CourseCard img={web9} title={web_title9} link={web_link9} />
            </Row>
        </div>
    );
}

function CS_courses() {
    return (
        <div className='div-center'>
            <Row xl="3" lg="2" md="2" sm="1" className="hidden-xs-down">
                <CourseCard img={cs1} title={cs_title1} link={cs_link1} />
                <CourseCard img={cs2} title={cs_title2} link={cs_link2} />
                <CourseCard img={cs3} title={cs_title3} link={cs_link3} />
            </Row>
            <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
                <CourseCard img={cs5} title={cs_title5} link={cs_link5} />
                <CourseCard img={cs6} title={cs_title6} link={cs_link6} />
                <CourseCard img={cs7} title={cs_title7} link={cs_link7} />
            </Row>
            <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
                <CourseCard img={cs4} title={cs_title4} link={cs_link4} />
                <CourseCard img={cs8} title={cs_title8} link={cs_link8} />
                <CourseCard img={cs9} title={cs_title9} link={cs_link9} />
            </Row>
            <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
                <CourseCard img={cs10} title={cs_title10} link={cs_link10} />
            </Row>
        </div>
    );
}

function DA_courses() {
    return (
        <div className='div-center'>
            <Row xl="3" lg="2" md="2" sm="1" className="hidden-xs-down">
                <CourseCard img={da1} title='Applied Machine Learning in Python' link={da_link1} />
                <CourseCard img={da2} title='Applied Social Network Analysis in Python' link={da_link2} />
                <CourseCard img={da3} title='Applied Text Mining in Python' link={da_link3} />
            </Row>
            <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
                <CourseCard img={da5} title='Statistical Inference' link={da_link5} />
                <CourseCard img={da6} title='Regression Models' link={da_link6} />
                <CourseCard img={da7} title='Using Databases with Python' link={da_link7} />
            </Row>
            <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
                <CourseCard img={da9} title='Applied Plot' link={da_link9} />
                <CourseCard img={da10} title='Exploratory Data Analysis' link={da_link10} />
                <CourseCard img={da11} title='Getting and Cleaning Data' link={da_link11} />
            </Row>
            <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
                <CourseCard img={da13} title='Programming for Everybody' link={da_link13} />
                <CourseCard img={da14} title='R Programming' link={da_link14} />
                <CourseCard img={da15} title='Reproducible Research' link={da_link15} />
            </Row>
            <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
            <CourseCard img={da4} title='Practical Machine Learning' link={da_link4} />
            <CourseCard img={da8} title='Python Data Structures' link={da_link8} />
            <CourseCard img={da12} title='Introduction to Data Science in Python' link={da_link12} />
            </Row>
            <Row xl="3" lg="2" md="2" sm="1" className='padding-top hidden-xs-down'>
            <CourseCard img={da16} title='The Data Scientist’s Toolbox' link={da_link16} />
                <CourseCard img={da17} title='Using Python to Access Web Data' link={da_link17} />
            </Row>
        </div>
    );
}

function OTHER_courses() {
    return (
        <div className='div-center'>
            <Row xl="3" lg="2" md="2" sm="1" className="hidden-xs-down">
                <CourseCard img={other1} title='Developmental Psychology' link={other_link1} />
            </Row>
        </div>
    );
}

function CourseraContent() {
    return (
        <Container>
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
                        <Specialization />
                    </div>
                </Tab>
                <Tab eventKey="ml" title="Machine Learning">
                    <div className='u-center-text u-margin-bottom-big'>
                        <h1>Machine Learning</h1>
                        <ML_courses />
                    </div>
                </Tab>
                <Tab eventKey="SDE" title="Software Engineer">
                    <div className='u-center-text u-margin-bottom-big'>
                        <h1>Software Engineer</h1>
                        <SDE_courses />
                    </div>
                </Tab>
                <Tab eventKey="web" title="Web Programming">
                    <div className='u-center-text u-margin-bottom-big'>
                        <h1>Web Programming</h1>
                        <Web_courses />
                    </div>
                </Tab>
                <Tab eventKey="basic-cs" title="Basic Computer Science">
                    <div className='u-center-text u-margin-bottom-big'>
                        <h1>Basic Computer Science</h1>
                        <CS_courses />
                    </div>
                </Tab>
                <Tab eventKey="data-analysis" title="Data Analysis">
                    <div className='u-center-text u-margin-bottom-big'>
                        <h1>Data Analysis</h1>
                        <DA_courses />
                    </div>
                </Tab>
                <Tab eventKey="others" title="Others">
                    <div className='u-center-text u-margin-bottom-big'>
                        <h1>Others</h1>
                        <OTHER_courses />
                    </div>
                </Tab>
            </Tabs>
        </Container>
    );
}
export default CourseraContent;