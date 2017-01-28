var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');
require('applicationStyles');
$(document).foundation();

ReactDOM.render(
   <TodoApp/>, document.getElementById('app'));
