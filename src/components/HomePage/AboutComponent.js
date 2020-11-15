import React, { Component } from 'react';
import { Row, Container, Col, Nav } from 'react-bootstrap';
import { faFlask, faMugHot, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const star = <FontAwesomeIcon icon={faStar} color='rgba(255, 185, 0, 0.85)' />;
var stars1 = [];
for (let i = 0; i < 5; i++) {
  stars1.push(star);
}
var stars2 = [];
for (let i = 0; i < 5; i++) {
  stars2.push(star);
}
var stars3 = [];
for (let i = 0; i < 4; i++) {
  stars3.push(star);
}
var stars4 = [];
for (let i = 0; i < 4; i++) {
  stars4.push(star);
}
var stars5 = [];
for (let i = 0; i < 4; i++) {
  stars5.push(star);
}
var stars6 = [];
for (let i = 0; i < 4; i++) {
  stars6.push(star);
}
var stars7 = [];
for (let i = 0; i < 3; i++) {
  stars7.push(star);
}

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="about" className="about-style">
        <Container>
          <Row>
            <Col>
              <h1>More About Me</h1>
              <div id="about_summary">
                <span>Living in San Francisco, a machine learning engineer dedicated in modeling and date engineering &nbsp;&nbsp;</span>
                <FontAwesomeIcon icon={faFlask} /><br></br>
                <span>During free time, I enjoy coffee, art, TV series and explore delicious food &nbsp;&nbsp;</span>
                <FontAwesomeIcon icon={faMugHot} /><p></p><p></p>
              </div>
            </Col>
          </Row>
          <Row id="about_introduction">
            <Col className="font-left bold">
              <span>I am ...</span>
            </Col>
            <Col className="font-left bold">
              <p>Take my best ability as 100,  the other skills are following relatively:</p>
            </Col>
          </Row>
          <Row>
            <Col className="font-left" id="about_left">
              <span>As a good machine learning engineer,</span><br></br>
              <span>not only modeling skills and the solid mathematics background, </span><br></br>
              <span>but also implementation skills and system design ability are crucial.</span><br></br>
              <span>I own financial engineering and computer science double masters and </span>
              <span>keep sharpening coding, reading modeling papers.</span><p></p>

              <span>In a daily machine learning engineer in Yelp,</span><br></br>
              <span>besides hard skills, we also have to write down documentation and dicuss ideas with teammates and persuade people to develop the project.</span><br></br>
              <span></span><br></br>
            </Col>
            <Col className="font-left">
              <Row>
                <Col className="bold">recommendation system:</Col>
                <Col>{stars1} &nbsp;&nbsp;100 <p/></Col>
              </Row>
              <Row>
                <Col className="bold">data engineering:</Col>
                <Col>{stars2} &nbsp;&nbsp;85 <p/></Col>
              </Row>
              <Row>
                <Col className="bold">deep learning (NLP):</Col>
                <Col>{stars5} &nbsp;&nbsp;80 <p/></Col>
              </Row>
              <Row>
                <Col className="bold">deep learning (CV):</Col>
                <Col>{stars3} &nbsp;&nbsp;70 <p/></Col>
              </Row>
              <Row>
                <Col className="bold">Statistics:</Col>
                <Col>{stars4} &nbsp;&nbsp;80 <p/></Col>
              </Row>
              <Row>
                <Col className="bold">full-stack engineering:</Col>
                <Col>{stars6} &nbsp;&nbsp;80 <p/></Col>
              </Row>
              <Row>
                <Col className="bold">automation:</Col>
                <Col>{stars7} &nbsp;&nbsp;60 <p/></Col>
              </Row>
            </Col>
          </Row>
          <Row className="experience-block">
            <Col className="padding-top">
              <h2>Experience</h2>
              <Nav.Link
                href="https://drive.google.com/open?id=1GEbxXPFUEokbp7ftDhT8g9CTiara6e78"
                className=" name-logo">
                Resume
              </Nav.Link>
            </Col>
          </Row>
          <Row className="experience-block">
            <Col className="font-left">
              <h2>Yelp&nbsp;&nbsp;<span className="fa fa-yelp fa-lg"/></h2>
              <span className="bold">Ads Machine Learning Engineer, San Francisco</span><p></p>
              <span>Redesigned Ads Creative data logging pipeline to reduce engineer operation time with Data Lake,
                RedshiftandKafkaand migrated downstreams jobs toSpark ETL, resulting in 
                more maintainable production code.</span><p></p>
              <span>Delivered AB testing experiments for Ads Recall to increase user engagement
              with data analysis, SQL, Redshift, ElasticSearch, Python and Java.</span><p></p>
              <span>Delivered features and batches for Ads Targeting to increase model reliability
              and CTR with machine learning, pyspark, Python.</span><p></p>
              <span>Key collaborator between Ads, Intent and AdsUX teams to power several key features
                 on Yelp PRO.</span><p></p>
              <span>Developed Yelp Delivery features for Ads with ElasticSearch, Java and Python to 
                deal with COVID pandemic.</span><p></p>
            </Col>
            <Col className="font-left">
              <h2>Hitachi Vantara</h2>
              <span className="bold">Full-Stack Engineer, Santa Clara</span><p></p>
              <span>Delivered features for front-end and back-end with Java Spring Boot, ElasticSearch, Angular.JS, React.JS and Docker</span><p></p>
              <span>Designed and developed a real-time log tracking web application to visualize 10k+ logs with ElasticSearch, MongoDB, Vue.js and GoLang</span><p></p>
            </Col>
          </Row>
          <Row className="experience-block">
            <Col className="font-left">
              <h2>Art Studio for Art Exhibition Project</h2>
              <span className="bold">Tech Led, New York remote</span><p></p>
              <span>Collaborated with professor Huang and a student from School of Visual Arts, which is the top Art school in the world, to apply Variational Autoencoder
              Generative Adversarial Network (VAE GAN) to generate a new Chinese word and do words morphing</span><p></p>
              <span>Provided technical consultant (Python, deep learning) for their artworks ideas.</span><p></p>
            </Col>
            <Col className="font-left">
              <h2>Academia Sinica</h2>
              <span className="bold">NLP Research Assistant, Taiwan</span><p></p>
              <span>Applied SVM to model the entailment relationship between two sentences</span><p></p>
              <span>Preprocessed sentences to unify format and extracted features with Python</span><p></p>
            </Col>
          </Row>
          <Row className="experience-block">
            <Col className="font-left">
              <h2>IBM</h2>
              <span className="bold">Summer intern, Taiwan</span><p></p>
              <span>Improved the insurance sales performance by exploring Cross-Selling for Shin Kong Life, one of the largest insurancecompanies in Taiwan</span><p></p>
            </Col>
            <Col className="font-left">
              <h2>Super Computer Center</h2>
              <span className="bold">Volunteer Research Assistant, San Diego</span><p></p>
              <span>Collaborated with professor process 469 million from file system to database with withShellandPostgreSQL</span><p></p>
            </Col>
          </Row>
          <Row className="experience-block">
            <Col className="font-left">
              <h2>Super Computer Center</h2>
              <span className="bold">Volunteer Research Assistant, San Diego</span><p></p>
              <span>Improved to accuracy 70% to recognize six emotions of stories from GoFundMe by lexicon-based and Bayesian model</span><p></p>
              <span>Applied Regression Analysis to discuss the relationship between emotion score and the donations</span><p></p>
              <span>Applied Chi-Square test to discuss whether or not the amount of donation is the uniform distribution</span><p></p>
            </Col>
            <Col className="font-left">
              <h2>National Taiwan University</h2>
              <span className="bold">Psychology Research Assistant, Taiwan</span><p></p>
              <span>Identified the relationship that more handsome a man is, more affection girl has with market-basket analysis</span><p></p>
              <span>Performed data visualization with ggplot in R and applied SQL to do data analysis</span><p></p>
              <span>Developed a web server with JavaScript (JQuery), PHP, CSS and HTML</span><p></p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}
export default About;