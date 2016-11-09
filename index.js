import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link, browserHistory } from "react-router";
import './style.scss';

const Home = () => {
  return (
    <h2>Home</h2>
  )
};

const About = ({ children }) => {
  return (
    <div>
      <h2>About</h2>
      {children}
    </div>
  );
};

const Nested = () => {
  return (
    <h2>Nested Content</h2>
  )
};

const App = ({ children }) => {
  return (
    <div className="container">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/about/nested">About &raquo; Nested</Link></li>
      </ul>
      {children}
    </div>
  );
};

render(
  <Provider>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About}>
          <Route path="nested" component={Nested} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app")
);
