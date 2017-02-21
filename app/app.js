import React from 'react'
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from './components/Main';

require('./styles/app.scss');

ReactDOM.render(
  <h1>React Boilerplate Application</h1>,
  document.getElementById('app')
);
