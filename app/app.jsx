var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

// Load foundation
$(document).foundation();

// Load App scss
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <h1>React Boilerplate Application</h1>,
  document.getElementById('app')
);
