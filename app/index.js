import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Routes from './routes';
import './style.scss';

render(
  <AppContainer
    component={() => (
      <Provider>
        <Routes/>
      </Provider>
    )}/>,
  document.getElementById('app')
);
