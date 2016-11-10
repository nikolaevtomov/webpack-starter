import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer from './containers/app-container';
import Home from './components/home';
import About from './components/about';
import Nested from './components/nested';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={Home} />
      <Route path="about" component={About}>
        <Route path="nested" component={Nested} />
      </Route>
    </Route>
  </Router>
);
