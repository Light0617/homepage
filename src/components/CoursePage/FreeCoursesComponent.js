import React from 'react';
import {Container, Tabs, Tab } from 'react-bootstrap';

function DeepLearningCourses() {
  const hung_yi_ml_link="https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1";
  const hung_yi_ml2_link="https://www.youtube.com/watch?v=XnyM3-xtxHs&list=PLJV_el3uVTsOK_ZK5L0Iv_EQoL1JefRL4";
  const hung_yi_gan_link="https://www.youtube.com/watch?v=DQNNMiAP5lw&list=PLJV_el3uVTsMq6JEFPW35BCiOQTsoqwNw";
  const standford_DeepMultiTask_link="https://www.youtube.com/playlist?list=PLoROMvodv4rMC6zfYmnD7UG3LVvwaITY5&fbclid=IwAR0e08Nw0cIl_Mv2v2z-XeCwNeNlO4dlTB3ZyUSwur6lStVydGwtcmVf-zs";
  
  return (
    <div className='div-left'>
      <h3>Hung-yi Lee NTU - <a className="card-link" target="_blank" href={hung_yi_ml_link}>Machine Learning</a></h3>
      <h3>Hung-yi Lee NTU - <a className="card-link" target="_blank" href={hung_yi_ml2_link}>Next Step of Machine Learning</a></h3>
      <h3>Hung-yi Lee NTU - <a className="card-link" target="_blank" href={hung_yi_gan_link}>GAN</a></h3>
      <h3>Stanford - <a className="card-link" target="_blank" href={standford_DeepMultiTask_link}>Multi-Task and Meta-Learning</a></h3>
    </div>
  );
}
function TechCourses() {
  const startup_link="https://startupclass.samaltman.com/";
  const hacker_news_link="https://news.ycombinator.com/";
  const future_coding_link="https://futureofcoding.org/";
  return (
    <div className='div-left'>
      <h3>How to Start a Startup - <a className="card-link" target="_blank" href={startup_link}>
        <span className="fa fa-external-link"></span>
        </a></h3>
      <h3>Hacker News - <a className="card-link" target="_blank" href={hacker_news_link}>
      <span className="fa fa-external-link"></span></a></h3>
      <h3>Future of Coding - <a className="card-link" target="_blank" href={future_coding_link}>
      <span className="fa fa-external-link"></span></a></h3>
    </div>
  );
}
function FinanceCourses() {
  const billionaire_link="https://www.youtube.com/watch?v=dPlk6uwC6uk&t=11s&fbclid=IwAR3aV4u7GVvXXNENHxlPQb-0bc9k-YKQZDPcgrsl4qiegG1FyRy-lrPYEhs";
  return (
    <div className='div-left'>
      <h3>Underccover Billionaire - <a className="card-link" target="_blank" href={billionaire_link}>
        <span className="fa fa-external-link"></span></a></h3>
    </div>
  );
}

function FreeCourses() {
  return (
    <Container>
    <div className='u-center-text u-margin-bottom-big'>
          <h1>Free Online Learning</h1>
          <h2>My favorite learning resources..</h2>
        </div>
        <Tabs
          defaultActiveKey="deep_learning" transition={false} id="noanim-tab-example"
        >
          <Tab eventKey="deep_learning" title="Deep_Learning">
            <div className='u-center-text u-margin-bottom-big'>
              <DeepLearningCourses/>
            </div>
          </Tab>
          <Tab eventKey="tech" title="Tech">
            <div className='u-center-text u-margin-bottom-big'>
              <TechCourses/>
            </div>
          </Tab>
          <Tab eventKey="finance" title="Finance">
            <div className='u-center-text u-margin-bottom-big'>
              <FinanceCourses/>
            </div>
          </Tab>
        </Tabs>
      </Container>
  );
}
export default FreeCourses;