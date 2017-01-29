var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoApp = React.createClass({
    getInitialState : function () {
        return {
            todos : [
                {
                    id : 1,
                    text : 'walk the dog'
                },
                {
                    id : 2,
                    text : 'clean the yard'
                },
                {
                    id : 3,
                    text : 'go to gym'
                },
            ]
        };
    },
    handleAddTodo : function (text) {
        alert("new Todo : " + text);
    },
    render : function () {
        var {todos} = this.state;
        return (
            <div>
            Todo App Component
            <TodoList todos={todos} />
            <AddTodo onAddTodo = {this.handleAddTodo} />
            </div>
        )
    }
});

module.exports = TodoApp;