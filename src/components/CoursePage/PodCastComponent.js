import React from 'react';
import {Container, Tabs, Tab } from 'react-bootstrap';


function Startup() {
  const mastersofscale_link="https://mastersofscale.com/";
  const NPR_link="http://www.npr.org/podcasts/510313/how-i-built-this";
  const aoz_link = "https://a16z.com/podcasts/";
  const recode_link="https://www.recode.net/recode-decode-podcast-kara-swisher";
  const thisweek_link="https://www.youtube.com/user/ThisWeekIn/videos";
  const greylock_link="https://soundcloud.com/greylock-partners";
  const thetwentyminutevc_link = "https://thetwentyminutevc.com/category/podcast/";
  const thestartupchat_link="https://thestartupchat.com/";
  const wisdom_link="https://podcasts.apple.com/us/podcast/seeking-wisdom/id1072506427";
  const acquired_link="https://www.acquired.fm/";
  const yc_link="https://www.youtube.com/channel/UCcefcZRL2oaA_uBNeo5UOWg";
  const ihp_link="https://www.youtube.com/channel/UC10MbwdpwQh8hTfNirlu7iQ";
  const crazy_invest_link="https://podcasts.apple.com/us/podcast/%E7%96%AF%E6%8A%95%E5%9C%88/id1088178402";
  return (
    <div className='div-left'>
      <h4>
        <a className="card-link" target="_blank" href={mastersofscale_link}><span>Masters of Scale with Reid Hoffman: </span></a> 
        The talks about the growth of companies. They invited FB, Uber cofounders. Best!</h4>
      <h4>
        <a className="card-link" target="_blank" href={NPR_link}><span>How I Built This with Guy Raz: </span></a> 
        The talks about companies in Silicon Valley</h4>
      <h4>
        <a className="card-link" target="_blank" href={aoz_link}><span>AOZ16: </span></a> 
        a16z, a famous VC. The talks about the industry, stories in the companies, new technology, growth of company</h4>
      <h4>
        <a className="card-link" target="_blank" href={recode_link}><span>Recode Decode: </span></a> 
        a tech journalist for various fields</h4>
      <h4>
        <a className="card-link" target="_blank" href={thisweek_link}><span>This Week In Startups: </span></a> 
        a host from Launch Combinator: teach how to become investor, trach how to quickly grow for startup</h4>
      <h4>
        <a className="card-link" target="_blank" href={greylock_link}><span>Greymatter Greylock Partners: </span></a> 
        VC podcast - focus on how to help business grow</h4>
      <h4>
        <a className="card-link" target="_blank" href={thetwentyminutevc_link}><span>The Twenty Minute VC: </span></a> 
        a talk about startup from investor's view</h4>
      <h4>
        <a className="card-link" target="_blank" href={thestartupchat_link}><span>The Startup Chat with Steli and Hiten: </span></a> 
        a small talk between 2 cofounder in startup</h4>
      <h4>
        <a className="card-link" target="_blank" href={wisdom_link}><span>Seeking Wisdom: </span></a> 
        a small talk about marketing, how to grow business</h4>
      <h4>
        <a className="card-link" target="_blank" href={acquired_link}><span>Acquired: </span></a> 
        a talk about IPO</h4>
      <h4>
        <a className="card-link" target="_blank" href={yc_link}><span>Y Combinator: </span></a> 
        a talk about Y Combinator team</h4>
      <h4>
        <a className="card-link" target="_blank" href={ihp_link}><span>Internet History Podcast: </span></a> 
        a talk about how tech company developed products</h4>
      <h4>
        <a className="card-link" target="_blank" href={crazy_invest_link}><span>瘋投圈: </span></a> 
        a talk about startup with deep knowledge and thinking</h4>
    </div>
  );
}

function Investment() {
  const investbest_link="http://investorfieldguide.com/podcast/";
  const focused_compounding_link="https://www.youtube.com/channel/UCeXFg-8SYfqa2bF-2ERR1SA/videos";
  const aqr_link = "https://www.aqr.com/Insights/Research";
  const meb_faber_link="https://mebfaber.com/";
  const value_investing_lendend_link="https://www.youtube.com/watch?v=sz9f5uVEaEg&list=PL-Y85ehs0DdozUD9j7dZIUgKaeBrPCN0i";
  const investor_podcast_link="https://www.youtube.com/channel/UCPbMnGLeHscshhD7PAEnvbw/videos";
  const five_question_link="https://fivegoodquestions.libsyn.com/";
  const master_in_business_link="https://www.bloomberg.com/podcasts/masters_in_business";
  const acquired_link="https://www.youtube.com/user/Tobycarlisle/videos";
  const filter_model_link="https://www.stitcher.com/podcast/flirting-with-models";
  return (
    <div className='div-left'>
      <h4>
        <a className="card-link" target="_blank" href={investbest_link}><span>Invest Like the Best: </span></a> 
        A CEO of O’Shaughnessy, the talks between professional investors.</h4>
      <h4>
        <a className="card-link" target="_blank" href={focused_compounding_link}><span>Focused Compounding: </span></a> 
        The talks about Value Investing from Andrew Kuhn and Geoff Gannon </h4>
      <h4>
        <a className="card-link" target="_blank" href={aqr_link}><span>The Curious Investor: </span></a> 
        A podcast from top hedge fund (AQR), factor investing, conetent is easy.</h4>
      <h4>
        <a className="card-link" target="_blank" href={meb_faber_link}><span>The Meb Faber Show: </span></a> 
        a focus on global investment.</h4>
      <h4>
        <a className="card-link" target="_blank" href={value_investing_lendend_link}><span>Value Investing with Legends: </span></a> 
        a best podcast for Value Investing.</h4>
      <h4>
        <a className="card-link" target="_blank" href={investor_podcast_link}><span>We Study Billionaires – The Investors Podcast: </span></a> 
        a talk about recent market, investment philosophy</h4>
      <h4>
        <a className="card-link" target="_blank" href={five_question_link}><span>Five Good Questions Podcast: </span></a> 
        a talk about half investment, half business thinking</h4>
      <h4>
        <a className="card-link" target="_blank" href={master_in_business_link}><span>Masters in Business: </span></a> 
        a podcast from Bloomberg. The topics are not always solid.</h4>
      <h4>
        <a className="card-link" target="_blank" href={acquired_link}><span>The Acquirers Podcast: </span></a> 
        A podcast finding a deep value stock, (low EV/EBIT) but sound quality is not good.</h4>
      <h4>
        <a className="card-link" target="_blank" href={filter_model_link}><span>Filtering with Models: </span></a> 
        A podcast more quant investment and theoretical.</h4>
    </div>
  );
}

function Marketing() {
  const CHURN_link="https://podcasts.apple.com/us/podcast/churn-fm/id1458286497";
  const GrowthTLDR_link="https://podcasts.apple.com/ie/podcast/growthtldr-podcast-weekly-conversations-on-business/id1413489357";
  const inside_intercom_link = "https://podcasts.apple.com/us/podcast/inside-intercom-podcast/id996103731";
  const saas_link="https://podcasts.apple.com/us/podcast/the-saas-revolution-show/id985731540";
  return (
    <div className='div-left'>
      <h4>
        <a className="card-link" target="_blank" href={CHURN_link}><span>CHURN.FM: </span></a> 
        A talk about how market in the companies of subscription business, SasS.</h4>
      <h4>
        <a className="card-link" target="_blank" href={GrowthTLDR_link}><span>The Growth TL;DR Podcast: </span></a> 
        The talks about growth marketing </h4>
      <h4>
        <a className="card-link" target="_blank" href={inside_intercom_link}><span>Inside Intercom Podcast: </span></a> 
        Intercom is the best company doing best product. The talks about how to build the best product.</h4>
      <h4>
        <a className="card-link" target="_blank" href={saas_link}><span>The SaaS Revolution Show: </span></a> 
        a talk about SaaS companies, but with low sound quality.</h4>
    </div>
  );
}

function Health() {
  const Bulletproof_link="https://www.youtube.com/playlist?list=PLSGkNZ3lZbGvOE35BXc0hBUfhHuRhP51y";
  const peterattiamd_link="https://peterattiamd.com/podcast/";
  return (
    <div className='div-left'>
      <h4>
        <a className="card-link" target="_blank" href={Bulletproof_link}><span>Bulletproof Radio: </span></a> 
        A talk about health.</h4>
      <h4>
        <a className="card-link" target="_blank" href={peterattiamd_link}><span>The Peter Attia Drive: </span></a> 
        The talks about health and longer live. </h4>
    </div>
  );
}

function Growth() {
  const tim_link="https://tim.blog/podcast/";
  const SuperHuman_link="https://www.youtube.com/c/BecomingSuperHuman/videos";
  const Noah_link="https://www.youtube.com/user/crxnamja/videos";
  const TonyRobbinsLive_link="https://www.youtube.com/user/TonyRobbinsLive/videos";
  const nav_link="https://nav.al/";
  const Kevin_link="https://podcasts.apple.com/us/podcast/the-kevin-rose-show/id1088864895";
  const Shane_link="https://podcasts.apple.com/us/podcast/the-knowledge-project-with-shane-parrish/id990149481";
  const Adam_link="https://podcasts.apple.com/us/podcast/worklife-with-adam-grant/id1346314086?mt=2&ign-mpt=uo%3D4";
  return (
    <div className='div-left'>
      <h4>
        <a className="card-link" target="_blank" href={tim_link}><span>The Tim Ferriss Show</span></a> 
        </h4>
      <h4>
        <a className="card-link" target="_blank" href={SuperHuman_link}><span>SuperHuman Academy: </span></a> 
        The talks about interesting tools and skills. </h4>
      <h4>
        <a className="card-link" target="_blank" href={Noah_link}><span>Noah Kagan Presents: </span></a> 
        The talks about sharing interesting things. </h4>
      <h4>
        <a className="card-link" target="_blank" href={TonyRobbinsLive_link}><span>The Tony Robbins Podcast</span></a> 
        The talks about encourage</h4>
      <h4>
        <a className="card-link" target="_blank" href={nav_link}><span>Naval: </span></a> 
        The talks about wisdom, health, growth. </h4>
      <h4>
        <a className="card-link" target="_blank" href={Kevin_link}><span>The Kevin Rose Show: </span></a> 
        The talks about sharing interesting things. </h4>
      <h4>
        <a className="card-link" target="_blank" href={Shane_link}><span>The Knowledge Project with Shane Parrish: </span></a> 
        The talks about thinking, knowledge. </h4>
      <h4>
        <a className="card-link" target="_blank" href={Adam_link}><span>WorkLife with Adam Grant: </span></a> 
        How to Love Criticism. </h4>
    </div>
  );
}

function Other() {
  const tyler_link="https://podcasts.apple.com/us/podcast/conversations-with-tyler/id983795625?mt=2";
  const mark_link="https://podcasts.apple.com/us/podcast/tech-society-with-mark-zuckerberg/id1460731098";
  const Lewis_link="https://atrpodcast.com/episodes";
  return (
    <div className='div-left'>
      <h4>
        <a className="card-link" target="_blank" href={tyler_link}><span>Conversations with Tyler</span></a>
        A economist with top impact and talking about the change of the world. Best!
        </h4>
      <h4>
        <a className="card-link" target="_blank" href={mark_link}><span>Tech, Society with Mark Zuckerberg: </span></a> 
        The talks about Makt interview with other people. </h4>
      <h4>
        <a className="card-link" target="_blank" href={Lewis_link}><span>Against the Rules with Michael Lewis: </span></a> 
        the host is the author of most popular books (The Big Short, Moneyball). </h4>
    </div>
  );
}

function Podcasts() {
  return (
    <Container>
    <div className='u-center-text u-margin-bottom-big'>
          <h1>Podcast</h1>
        </div>
        <Tabs
          defaultActiveKey="startup" transition={false} id="noanim-tab-example"
        >
          <Tab eventKey="startup" title="Startup_Tech">
            <div className='u-center-text u-margin-bottom-big'>
              <Startup/>
            </div>
          </Tab>
          <Tab eventKey="investment" title="Investment">
            <div className='u-center-text u-margin-bottom-big'>
              <Investment/>
            </div>
          </Tab>
          <Tab eventKey="growth" title="Growth">
            <div className='u-center-text u-margin-bottom-big'>
              <Growth/>
            </div>
          </Tab>
          <Tab eventKey="marketing" title="Marketing">
            <div className='u-center-text u-margin-bottom-big'>
              <Marketing/>
            </div>
          </Tab>
          <Tab eventKey="health" title="Health">
            <div className='u-center-text u-margin-bottom-big'>
              <Health/>
            </div>
          </Tab>
          <Tab eventKey="other" title="Other">
            <div className='u-center-text u-margin-bottom-big'>
              <Other/>
            </div>
          </Tab>
        </Tabs>
      </Container>
  );
}
export default Podcasts;