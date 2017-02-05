var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
import ConnectedAddTodo, {AddTodo} from 'AddTodo';
import *  as actions from 'actions';
describe('Add Todo Component', () => {
    it('Should Exists', () => {
        expect(AddTodo).toExist();
    });

    it('it should dispatch ADD_TODO on valid data', () => {
        var TodoText = 'Check Mail';
        var action = actions.startAddTodo(TodoText);
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);

        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = TodoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(
                action
            );
    });

    it('it should not dispatch ADD_TODO on invalid data', () => {
        var TodoText = '';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);

        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = TodoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});