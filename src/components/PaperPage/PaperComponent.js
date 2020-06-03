import React, { Component } from 'react';
import { Row, Container, Col, Table, Card, Tabs, Tab, Button } from 'react-bootstrap';

import { faFlask, faMugHot, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const recom1="https://medium.com/@arthurlee_73761/review-for-trust-aware-recommender-systems-992fa997b02";
const recom2="https://medium.com/@arthurlee_73761/review-for-performance-of-recommender-algorithms-on-top-n-recommendation-tasks-9b3af197072";
const recom3="https://medium.com/@arthurlee_73761/review-for-multiverse-recommendation-n-dimensional-tensor-factorization-for-context-aware-d024da1a279c";
const recom4="https://medium.com/@arthurlee_73761/a-matrix-factorization-technique-with-trust-propagation-for-recommendation-in-social-networks-b14b0ea2d848";
const recom5="https://medium.com/@arthurlee_73761/recsys11-utilizing-related-products-for-post-purchase-recommendation-in-e-commerce-62442a70f7de";
const recom6="https://medium.com/@arthurlee_73761/recsys11-ordrec-an-ordinal-model-for-predicting-personalized-item-rating-distributions-742205ac3abc";
const recom7="https://medium.com/@arthurlee_73761/hidden-factors-and-hidden-topics-understanding-rating-dimensions-with-review-text-fc80b094e4ae";
const recom8="https://medium.com/@arthurlee_73761/beyond-clicks-dwell-time-for-personalization-5a1053a8961d";
const recom9="https://medium.com/@arthurlee_73761/context-aware-event-recommendation-in-event-based-social-networks-50810f697cc9";
const recom10="https://medium.com/@arthurlee_73761/recsys16-adaptive-personalized-diversity-for-visual-discovery-76d8c53f900e";
const recom11="https://medium.com/@arthurlee_73761/recsys-16-local-item-item-models-for-top-n-recommendation-753555b5c1c";
const recom12="https://medium.com/@arthurlee_73761/recsys-17-translation-based-recommendation-233900ae5219";
const recom13="https://medium.com/@arthurlee_73761/recsys-17-modeling-the-assimilation-contrast-effects-in-online-product-rating-systems-debiasing-67f7d2ecc49d";


const recom_title1="RecSys’07: Trust-aware recommender systems";
const recom_title2="RecSys’10: Performance of recommender algorithms on top-n recommendation tasks";
const recom_title3="RecSys’10: Multiverse Recommendation: N-dimensional Tensor Factorization for Context-aware Collaborative Filtering";
const recom_title4="RecSys’10: A Matrix Factorization Technique with Trust Propagation for Recommendation in Social Networks";
const recom_title5="RecSys’11: Utilizing related products for post-purchase recommendation in e-commerce";
const recom_title6="RecSys’11: OrdRec: an ordinal model for predicting personalized item rating distributions";
const recom_title7="RecSys’13: Hidden Factors and Hidden Topics: Understanding Rating Dimensions with Review Text";
const recom_title8="RecSys’14: Beyond Clicks: Dwell Time for Personalization";
const recom_title9="RecSys’15: Context-Aware Event Recommendation in Event-based Social Networks";
const recom_title10="RecSys’16: Adaptive, Personalized Diversity for Visual Discovery";
const recom_title11="RecSys’16: Local Item-Item Models for Top-N Recommendation";
const recom_title12="RecSys’17: Translation-based Recommendation";
const recom_title13="RecSys’17: Modeling the Assimilation-Contrast Effects in Online Product Rating Systems: Debiasing and Recommendations";

const nlp1="https://medium.com/@arthurlee_73761/coling14-deep-convolutional-neural-networks-for-sentiment-analysis-of-short-texts-c2d44182653d";
const nlp2="https://medium.com/@arthurlee_73761/naacl19-utilizing-bert-for-aspect-based-sentiment-analysis-via-constructing-auxiliary-sentence-a80dd68866b2";

const nlp_title1="COLING’14: Deep Convolutional Neural Networks for Sentiment Analysis of Short Texts";
const nlp_title2="NAACL’19: Utilizing BERT for Aspect-Based Sentiment Analysis via Constructing Auxiliary Sentence";


function BlogLink(props) {
  return(
    <div className="paper-text">{props.title} &nbsp;- &nbsp;
      <a className="card-link" target="_blank" href={props.link}>
        <span className="fa fa-external-link"></span>
      </a>
    </div>
  );
}
function RecommendationSystem() {
  return (
    <div className="div-left">
      <Table striped bordered hover>
        <tbody>
          <tr><td><BlogLink title={recom_title1} link={recom1}/></td></tr>
          <tr><td><BlogLink title={recom_title2} link={recom2}/></td></tr>
          <tr><td><BlogLink title={recom_title3} link={recom3}/></td></tr>
          <tr><td><BlogLink title={recom_title4} link={recom4}/></td></tr>
          <tr><td><BlogLink title={recom_title5} link={recom5}/></td></tr>
          <tr><td><BlogLink title={recom_title6} link={recom6}/></td></tr>
          <tr><td><BlogLink title={recom_title7} link={recom7}/></td></tr>
          <tr><td><BlogLink title={recom_title8} link={recom8}/></td></tr>
          <tr><td><BlogLink title={recom_title9} link={recom9}/></td></tr>
          <tr><td><BlogLink title={recom_title10} link={recom10}/></td></tr>
          <tr><td><BlogLink title={recom_title11} link={recom11}/></td></tr>
          <tr><td><BlogLink title={recom_title12} link={recom12}/></td></tr>
          <tr><td><BlogLink title={recom_title13} link={recom13}/></td></tr>
        </tbody>
      </Table>
    </div>
  );
}
function NaturalLanguageProcessing() {
  return (
    <div className="div-left">
      <Table striped bordered hover>
        <tbody>
          <tr><td><BlogLink title={nlp_title1} link={nlp1}/></td></tr>
          <tr><td><BlogLink title={nlp_title2} link={nlp2}/></td></tr>
        </tbody>
      </Table>
    </div>
  );
}

const star = <FontAwesomeIcon icon={faStar} color='rgba(255, 185, 0, 0.85)' />;
var stars1 = [];
for (let i = 0; i < 5; i++) {
  stars1.push(star);
}
var stars2 = [];
for (let i = 0; i < 2; i++) {
  stars2.push(star);
}

class Paper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="paper" className="paper-style">
        <Container>
          <div className='u-center-text u-margin-bottom-big'>
            <h1>Paper Challenge</h1>
            <h2>Paper Challenge for different fields.</h2>
          </div>
          <Row>
            <Col className="font-left">
              <Row>
                <Col className="bold">Recommendation system:</Col>
                <Col>{stars1} &nbsp;&nbsp;13 <p/></Col>
              </Row>
              <Row>
                <Col className="bold">Natural language processing:</Col>
                <Col>{stars2} &nbsp;&nbsp;2 <p/></Col>
              </Row>
            </Col>
          </Row>

          <Tabs
            defaultActiveKey="RecommendationSystem" transition={false} id="noanim-tab-example"
          >
            <Tab eventKey="RecommendationSystem" title="Recommendation System">
              <div className='u-center-text u-margin-bottom-big'>
                <RecommendationSystem/>
              </div>
            </Tab>
            <Tab eventKey="nlp" title="Natural Language Processing">
              <div className='u-center-text u-margin-bottom-big'>
                <NaturalLanguageProcessing/>
              </div>
            </Tab>
          </Tabs>
        </Container>
        
      </div>
    )
  }

}
export default Paper;