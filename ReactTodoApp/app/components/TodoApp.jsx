var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoApp = React.createClass({
    getInitialState : function () {
        return {
            showCompleted : false,
            searchText : '',
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
    handleSearch : function (showCompleted, searchText) {
        this.setState ({
            showCompleted : showCompleted,
            searchText : searchText.toLowerCase()
        });
    },
    handleAddTodo : function (text) {
        alert("new Todo : " + text);
    },
    render : function () {
        var {todos} = this.state;
        return (
            <div>
            Todo App Component
            <TodoSearch onSearch={this.handleSearch} />
            <TodoList todos={todos} />
            <AddTodo onAddTodo = {this.handleAddTodo} />
            </div>
        )
    }
});

module.exports = TodoApp;