import React from 'react'
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from './components/Main';

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <h1>React Boilerplate Application</h1>,
  document.getElementById('app')
);
