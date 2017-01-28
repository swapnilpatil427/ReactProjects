var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var TodoList = require('TodoList');
var Todo = require('Todo');
describe('TodoList Component', () => {
    it('Should Exists', () => {
        expect(TodoList).toExist();
    });

    it('should render one todo component for each todo item', () => {
        var todos = [
            {
                id : 1, 
                text : 'do something'
            },
            {
                id : 2,
                text : "check mail"
            }
        ];

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        var todoscomponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todoscomponents.length).toBe(todos.length);
    });
});