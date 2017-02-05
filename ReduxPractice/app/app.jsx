var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

require('applicationStyles');
$(document).foundation();

ReactDOM.render(
   <p> Boiler plate with Testing Project </p>, document.getElementById('app'));


require('./firebase-example.jsx');