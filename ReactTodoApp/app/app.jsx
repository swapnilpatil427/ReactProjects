var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');
var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
require('applicationStyles');
$(document).foundation();

import TodoAPI from 'TodoAPI'

store.subscribe(() => {
    var state = store.getState();
    console.log('New State', state);
    TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));
ReactDOM.render(
   <Provider store={store}>
        <TodoApp />
   </Provider>, document.getElementById('app'));
