import React from 'react';
import { Row, Container, Col, Table, Tabs, Tab } from 'react-bootstrap';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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

function Startup() {
  const link1="https://medium.com/@arthurlee_73761/podcast-note-3-fintech-startup-in-china-a38c4e823ffd";
  const link2="https://medium.com/@arthurlee_73761/podcast-note-2-saas-too-popular-what-is-that-7afdfdc70331";
  const link3="https://medium.com/@arthurlee_73761/podcast-note-5-purchasing-furniture-in-online-9dc6e6bff259";
  const link4="https://medium.com/@arthurlee_73761/podcast-note-6-2016-%E5%9B%9E%E9%A1%BE%E4%B8%8E%E5%B1%95%E6%9C%9B-25737d63b0a6";
  const link5="https://medium.com/@arthurlee_73761/podcast-note-7-about-lifease-53837a9627fd";
  const link6="https://medium.com/@arthurlee_73761/podcast-note-8-about-knowledge-to-cash-9cc1767d4596";
  const link7="https://medium.com/@arthurlee_73761/podcast-note-9-tea-startup-2f02b092e01c";
  const link8="https://medium.com/@arthurlee_73761/podcast-note-10-grocery-startup-53c77114ef61";
  const link9="https://medium.com/@arthurlee_73761/podcast-note-11-lease-e-commerce-22d3a2cb53f8";
  const link10="https://medium.com/@arthurlee_73761/podcast-note-12-about-new-product-e9a1a22a7715";
  const link11="https://medium.com/@arthurlee_73761/podcast-note-13-nobody-retail-c5e63946e080";
  const link12="https://medium.com/@arthurlee_73761/podcast-note-14-product-branding-b4c5beaaff51";
  const title1="1.Podcast note: Fintech Startup in China";
  const title2="2.SaaS too popular, what is that";
  const title3="3.purchasing furniture in online?";
  const title4="4.2016 outlook";
  const title5="5.About LIFEASE";
  const title6="6.About knowledge to Cash";
  const title7="7.Tea startup";
  const title8="8.Grocery startup";
  const title9="9.lease E-Commerce";
  const title10="10.About New Product";
  const title11="11.nobody retail";
  const title12="12.product branding";

  const link13="https://medium.com/@arthurlee_73761/podcast-note-15-product-branding-d52241acf9e6";
  const link14="https://medium.com/@arthurlee_73761/podcast-note-17-product-branding-57f9570834cd";
  const link15="https://medium.com/@arthurlee_73761/podcast-note-17-product-branding-adb1b5fb60eb";
  const link16="https://medium.com/@arthurlee_73761/podcast-note-18-pinduoduo-91a5ed68dd6d";
  const link17="https://medium.com/@arthurlee_73761/podcast-note-20-renting-house-9454d9c12cd9";
  const link18="https://medium.com/@arthurlee_73761/podcast-note-19-starbucks-cc9893326231";
  const link19="https://medium.com/@arthurlee_73761/podcast-note-21-freelancers-2dc0df6a9b6c";
  const link20="https://medium.com/@arthurlee_73761/podcast-note-22-online-travel-908162a74a76";
  const title13="13.Knowledge business";
  const title14="14.2017 outlook";
  const title15="15.Blockchain business";
  const title16="16.Pinduoduo";
  const title17="17.Renting house";
  const title18="18.Starbucks";
  const title19="19.Freelancers";
  const title20="20.Online Travel";

  const link21="https://medium.com/@arthurlee_73761/podcast-note-23-xiaomi-b73ec6bf2e73";
  const link22="https://medium.com/@arthurlee_73761/podcast-note-24-coffee-fight-in-china-2ebbb94976aa";
  const link23="https://medium.com/@arthurlee_73761/podcast-note-25-meituan-dianping-a58207136d28";
  const link24="https://medium.com/@arthurlee_73761/podcast-note-25-how-to-use-vc-thinking-to-buy-stock-d65a27a24626";
  const link25="https://medium.com/@arthurlee_73761/podcast-note-26-miniso-bf61163d254b";
  const link26="https://medium.com/@arthurlee_73761/podcast-note-27-learning-era-1391ff05c272";
  const link27="https://medium.com/@arthurlee_73761/podcast-note-28-airbnb-fc27f32f46e9";
  const link28="https://medium.com/@arthurlee_73761/podcast-note-29-clothing-in-china-fd91a9567d61";
  const link29="https://medium.com/@arthurlee_73761/podcast-note-30-nome-9771054d6f60";
  const link30="https://medium.com/@arthurlee_73761/podcast-note-31-platform-fe2ae4ad385d";
  const title21="21.Xiaomi";
  const title22="22.Coffee fight in China";
  const title23="23.Meituan Dianping"
  const title24="24.How to use VC thinking to buy stock?";
  const title25="25.Miniso";
  const title26="26.Learning Era";
  const title27="27.Airbnb";
  const title28="28.clothing in China";
  const title29="29.NOME";
  const title30="30.platform history";

  const link31="https://medium.com/@arthurlee_73761/podcast-note-32-how-to-absorb-information-c16ddd516bd2";
  const link32="https://medium.com/@arthurlee_73761/podcast-note-33-e-commerce-in-other-countries-66ef6a18bd3f";
  const link33="https://medium.com/@arthurlee_73761/podcast-note-34-launch-a-new-business-not-only-in-big-cities-d2f6829c88d4";
  const link34='';
  const title31="31.How to absorb information";
  const title32="32.E-Commerce in other countries";
  const title33="33.launch a new business not only in big cities";
  const title34='';

  return (
    <div className="div-left">
    <Table striped bordered hover>
      <tbody>
        <tr><td><BlogLink title={title33} link={link33}/></td></tr>
        <tr><td><BlogLink title={title32} link={link32}/></td></tr>
        <tr><td><BlogLink title={title31} link={link31}/></td></tr>
        <tr><td><BlogLink title={title30} link={link30}/></td></tr>
        <tr><td><BlogLink title={title29} link={link29}/></td></tr>
        <tr><td><BlogLink title={title28} link={link28}/></td></tr>
        <tr><td><BlogLink title={title27} link={link27}/></td></tr>
        <tr><td><BlogLink title={title26} link={link26}/></td></tr>
        <tr><td><BlogLink title={title25} link={link25}/></td></tr>
        <tr><td><BlogLink title={title24} link={link24}/></td></tr>
        <tr><td><BlogLink title={title23} link={link23}/></td></tr>
        <tr><td><BlogLink title={title22} link={link22}/></td></tr>
        <tr><td><BlogLink title={title21} link={link21}/></td></tr>
        <tr><td><BlogLink title={title20} link={link20}/></td></tr>
        <tr><td><BlogLink title={title19} link={link19}/></td></tr>
        <tr><td><BlogLink title={title18} link={link18}/></td></tr>
        <tr><td><BlogLink title={title17} link={link17}/></td></tr>
        <tr><td><BlogLink title={title16} link={link16}/></td></tr>
        <tr><td><BlogLink title={title15} link={link15}/></td></tr>
        <tr><td><BlogLink title={title14} link={link14}/></td></tr>
        <tr><td><BlogLink title={title13} link={link13}/></td></tr>
        <tr><td><BlogLink title={title12} link={link12}/></td></tr>
        <tr><td><BlogLink title={title11} link={link11}/></td></tr>
        <tr><td><BlogLink title={title10} link={link10}/></td></tr>
        <tr><td><BlogLink title={title9} link={link9}/></td></tr>
        <tr><td><BlogLink title={title8} link={link8}/></td></tr>
        <tr><td><BlogLink title={title7} link={link7}/></td></tr>
        <tr><td><BlogLink title={title6} link={link6}/></td></tr>
        <tr><td><BlogLink title={title5} link={link5}/></td></tr>
        <tr><td><BlogLink title={title4} link={link4}/></td></tr>
        <tr><td><BlogLink title={title3} link={link3}/></td></tr>
        <tr><td><BlogLink title={title2} link={link2}/></td></tr>
        <tr><td><BlogLink title={title1} link={link1}/></td></tr>
      </tbody>
    </Table>
    </div>
  );
}

function Engineering() {
  const link1="https://medium.com/@arthurlee_73761/engineer-blog-note-contextual-relevance-in-ads-ranking-d22dad9d1803";
  const link2="https://medium.com/@arthurlee_73761/engineer-blog-note-a-real-world-visual-discovery-system-1b51d89d719";
  const link3="https://medium.com/@arthurlee_73761/engineer-blog-note-3-embedding-at-twitter-2fc3e2d8a736";
  const title1="1.Contextual relevance in ads ranking"
  const title2="2.A real world visual discovery system"
  const title3="3.Embedding at Twitter"
  return (
    <div className="div-left">
    <Table striped bordered hover>
      <tbody>
        <tr><td><BlogLink title={title3} link={link3}/></td></tr>
        <tr><td><BlogLink title={title2} link={link2}/></td></tr>
        <tr><td><BlogLink title={title1} link={link1}/></td></tr>
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

const star = <FontAwesomeIcon icon={faStar} color='rgba(255, 185, 0, 0.85)' />;
var stars1 = [];
for (let i = 0; i < 5; i++) {
  stars1.push(star);
}
var stars2 = [];
for (let i = 0; i < 2; i++) {
  stars2.push(star);
}

function PodcastBlog() {
  return(
    <Container>
    <div className='u-center-text u-margin-bottom-big'>
      <h2>My review blogs.</h2>
    </div>
    <Row>
      <Col className="font-left">
        <Row>
          <Col className="bold">Startup podcasts:</Col>
          <Col>{stars1} &nbsp;&nbsp;33 <p/></Col>
        </Row>
        <Row>
          <Col className="bold">Engineering blogs:</Col>
          <Col>{stars1} &nbsp;&nbsp;3 <p/></Col>
        </Row>
        <Row>
          <Col className="bold">Investment podcasts:</Col>
          <Col>{stars2} &nbsp;&nbsp;1 <p/></Col>
        </Row>
      </Col>
    </Row>
    <Tabs
      defaultActiveKey="engineering" transition={false} id="noanim-tab-example"
    >
      <Tab eventKey="engineering" title="engineering">
        <div className='u-center-text u-margin-bottom-huge_big'>
          <h1>engineering</h1>
          <Engineering/>
        </div>
      </Tab>
      <Tab eventKey="podcast" title="podcast">
        <div className='u-center-text u-margin-bottom-huge_big'>
          <h1>startup</h1>
          <Startup/>
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