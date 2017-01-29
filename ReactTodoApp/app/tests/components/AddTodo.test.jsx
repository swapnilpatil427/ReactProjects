var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var AddTodo = require('AddTodo');

describe('Add Todo Component', () => {
    it('Should Exists', () => {
        expect(AddTodo).toExist();
    });

    it('it should call onAddTodo on valid data', () => {
        var TodoText = 'Check Mail';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);

        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = TodoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(TodoText);
    });

    it('it should not call onAddTodo on valid data', () => {
        var TodoText = '';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);

        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = TodoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});