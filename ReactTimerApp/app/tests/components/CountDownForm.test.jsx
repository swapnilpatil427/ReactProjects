var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var CountDownForm = require('CountDownForm');
describe('Count Down Form', () => {
    it('Should Exists', () => {
        expect(CountDownForm).toExist();
    });

    it('Should call onSetCountDown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownform = TestUtils.renderIntoDocument(<CountDownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownform));
        countdownform.refs.seconds.value = '129';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(129);
    });

    it('Should not call onSetCountDown if invalid seconds are entered', () => {
        var spy = expect.createSpy();
        var countdownform = TestUtils.renderIntoDocument(<CountDownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownform));
        countdownform.refs.seconds.value = '129A';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});