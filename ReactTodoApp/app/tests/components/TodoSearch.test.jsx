var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var TodoSearch = require('TodoSearch');

describe('TodoSearch Component', () => {
    it('Should Exists', () => {
        expect(TodoSearch).toExist();
    });

    it('it should call onSearch on with entered input text', () => {
        var SearchText = 'Dog';
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
        todoSearch.refs.searchText.value = SearchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);
        expect(spy).toHaveBeenCalledWith(false, SearchText);
    });

    it('it should call onSearch on with proper checkbox change value', () => {
        var SearchText = 'Dog';
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith(true, '');
    }); 

});