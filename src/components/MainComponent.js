import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './HomePage/PageComponent';
import BlogPage from './BlogPage/PageComponent';
import BookPage from './BookPage/PageComponent';
import CoursePage from './CoursePage/PageComponent';
import PaperPage from './PaperPage/PageComponent';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <div className="App">
      //   <TransitionGroup>
      //     <CSSTransition key={this.props.location.key} classNames="page" timeout={250}>
      //       <Switch location={this.props.location}>
      //         <Route exact path='/' component={Home} />
      //         <Route path='/blog' component={BlogPage} />
      //         <Route path='/book' component={BookPage} />
      //         <Route path='/course' component={CoursePage} />
      //         {/* <Redirect to='/' /> */}
      //       </Switch>
      //     </CSSTransition>
      //   </TransitionGroup>
      // </div>

      <div className="App">
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={250}>
            <HashRouter basename="/">
              <Route exact path='/' component={Home} />
              <Route path='/paper' component={PaperPage} />
              <Route path='/blog' component={BlogPage} />
              <Route path='/book' component={BookPage} />
              <Route path='/course' component={CoursePage} />
              <Redirect to='/' />
            </HashRouter>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}
export default withRouter(Main);
