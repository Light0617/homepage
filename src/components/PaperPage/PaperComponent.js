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

const recom_title14="RecSys’18: HOP-Rec: High-Order Proximity for Implicit Recommendation";
const recom_title15="RecSys’18: Impact of item consumption on assessment of recommendations in user studies";
const recom_title16="RecSys’18: Generation Meets Recommendation: Proposing Novel Items for Groups of Users";
const recom_title17="RecSys’18: Causal Embeddings for Recommendation";
const recom_title18="RecSys’19: Pace My Race: Recommendations for Marathon Running";
const recom_title19="KDD’15 Visual Search at Pinterest";
const recom_title20="WWW’17: Visual Discovery";
const recom14="https://medium.com/@arthurlee_73761/recsys-18-hop-rec-high-order-proximity-for-implicit-recommendation-d4da19403140";
const recom15="https://medium.com/@arthurlee_73761/recsys-18-impact-of-item-consumption-on-assessment-of-recommendations-in-user-studies-b310ecd5dab2";
const recom16="https://medium.com/@arthurlee_73761/recsys-18-generation-meets-recommendation-proposing-novel-items-for-groups-of-users-c39bbf1b4bdb";
const recom17="https://medium.com/@arthurlee_73761/recsys-18-causal-embeddings-for-recommendation-57443e326002";
const recom18="https://medium.com/@arthurlee_73761/recsys-19-pace-my-race-recommendations-for-marathon-running-cf2fed42be97";
const recom19="https://medium.com/@arthurlee_73761/kdd15-visual-search-at-pinterest-22cd011bca22";
const recom20="https://medium.com/@arthurlee_73761/kdd17-visual-discovery-c7590e430b12";

const recom_title21="KDD’18: Graph Convolutional Neural Networks for Web-Scale Recommender Systems";
const recom_title22="KDD’19: Learning a Unified Embedding for Visual Search at Pinterest";

const recom21="https://medium.com/@arthurlee_73761/kdd17-graph-convolutional-neural-networks-for-web-scale-recommender-systems-96e8aa09e294";
const recom22="https://medium.com/@arthurlee_73761/kdd19-learning-a-unified-embedding-for-visual-search-at-pinterest-37a69a00ec40";




const nlp1="https://medium.com/@arthurlee_73761/coling14-deep-convolutional-neural-networks-for-sentiment-analysis-of-short-texts-c2d44182653d";
const nlp2="https://medium.com/@arthurlee_73761/naacl19-utilizing-bert-for-aspect-based-sentiment-analysis-via-constructing-auxiliary-sentence-a80dd68866b2";
const nlp3="https://medium.com/@arthurlee_73761/nips13-distributed-representations-of-words-and-phrases-and-their-compositionality-ca92f558596a";
const nlp4="https://medium.com/@arthurlee_73761/nips2017-attention-is-all-you-need-transformer-b8981b9a2305";

const nlp_title1="COLING’14: Deep Convolutional Neural Networks for Sentiment Analysis of Short Texts";
const nlp_title2="NAACL’19: Utilizing BERT for Aspect-Based Sentiment Analysis via Constructing Auxiliary Sentence";
const nlp_title3="NIPS’13: Distributed Representations of Words and Phrases and their Compositionality(Word2Vec)";
const nlp_title4="NIPS’17: Attention Is All You Need (Transformer)";


const cv1="https://medium.com/@arthurlee_73761/bmvc19-classification-is-a-strong-baseline-for-deep-metric-learning-bdb4e9d1500e";
const cv2="hhttps://medium.com/@arthurlee_73761/cvpr19-complete-the-look-scene-based-complementary-product-recommendation-e930dc554b98";

const cv_title1="BMVC19' Classification is a Strong Baseline for Deep Metric Learning";
const cv_title2="CVPR19' Complete the Look: Scene-based Complementary Product Recommendation";



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
          <tr><td><BlogLink title={recom_title22} link={recom22}/></td></tr>
          <tr><td><BlogLink title={recom_title21} link={recom21}/></td></tr>
          <tr><td><BlogLink title={recom_title20} link={recom20}/></td></tr>
          <tr><td><BlogLink title={recom_title19} link={recom19}/></td></tr>
          <tr><td><BlogLink title={recom_title18} link={recom18}/></td></tr>
          <tr><td><BlogLink title={recom_title17} link={recom17}/></td></tr>
          <tr><td><BlogLink title={recom_title16} link={recom16}/></td></tr>
          <tr><td><BlogLink title={recom_title15} link={recom15}/></td></tr>
          <tr><td><BlogLink title={recom_title14} link={recom14}/></td></tr>
          <tr><td><BlogLink title={recom_title13} link={recom13}/></td></tr>
          <tr><td><BlogLink title={recom_title12} link={recom12}/></td></tr>
          <tr><td><BlogLink title={recom_title11} link={recom11}/></td></tr>
          <tr><td><BlogLink title={recom_title10} link={recom10}/></td></tr>
          <tr><td><BlogLink title={recom_title9} link={recom9}/></td></tr>
          <tr><td><BlogLink title={recom_title8} link={recom8}/></td></tr>
          <tr><td><BlogLink title={recom_title7} link={recom7}/></td></tr>
          <tr><td><BlogLink title={recom_title6} link={recom6}/></td></tr>
          <tr><td><BlogLink title={recom_title5} link={recom5}/></td></tr>
          <tr><td><BlogLink title={recom_title4} link={recom4}/></td></tr>
          <tr><td><BlogLink title={recom_title3} link={recom3}/></td></tr>
          <tr><td><BlogLink title={recom_title2} link={recom2}/></td></tr>
          <tr><td><BlogLink title={recom_title1} link={recom1}/></td></tr>
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
          <tr><td><BlogLink title={nlp_title4} link={nlp4}/></td></tr>
          <tr><td><BlogLink title={nlp_title3} link={nlp3}/></td></tr>
          <tr><td><BlogLink title={nlp_title2} link={nlp2}/></td></tr>
          <tr><td><BlogLink title={nlp_title1} link={nlp1}/></td></tr>
        </tbody>
      </Table>
    </div>
  );
}

function ComputerVision() {
  return (
    <div className="div-left">
      <Table striped bordered hover>
        <tbody>
          <tr><td><BlogLink title={cv_title2} link={cv2}/></td></tr>
          <tr><td><BlogLink title={cv_title1} link={cv1}/></td></tr>
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
                <Col>{stars1} &nbsp;&nbsp;22 <p/></Col>
              </Row>
              <Row>
                <Col className="bold">Natural language processing:</Col>
                <Col>{stars2} &nbsp;&nbsp;4 <p/></Col>
              </Row>
              <Row>
                <Col className="bold">Computer Vision:</Col>
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
            <Tab eventKey="cv" title="Computer Vision">
              <div className='u-center-text u-margin-bottom-big'>
                <ComputerVision/>
              </div>
            </Tab>
          </Tabs>
        </Container>
        
      </div>
    )
  }

}
export default Paper;