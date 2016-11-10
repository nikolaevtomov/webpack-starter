import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import './style.scss';

render(
  <Provider>
    <Routes/>
  </Provider>,
  document.getElementById('app')
);
