var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var CountDown = require('CountDown');

require('foundation-sites/dist/foundation.min.css');
require('applicationStyles');
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="countdown" component={CountDown}/>
        <IndexRoute component={Timer}/>
    </Route>
</Router>, document.getElementById('app'));
