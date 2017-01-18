var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountDown = require('CountDown');

describe('CountDown Component', () => {
    it('should exists', ()=> {
        expect(CountDown).toExist();
    });

    describe('handleSetCountDown', () => {
        it('should set state to started and count down', (done) => {
            var countdown = TestUtils.renderIntoDocument(<CountDown />);
            countdown.handleSetCountDown(109);

            expect(countdown.state.count).toBe(109);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(108);
                done();
            }, 1001);
        });

        it('should never set count less than zero', (done) => {
            var countdown = TestUtils.renderIntoDocument(<CountDown />);
            countdown.handleSetCountDown(1);
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });

        it('should pause countdown on paused status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<CountDown/>);
            countdown.handleSetCountDown(3);
            countdown.handleStatusChanged('paused');

             setTimeout(() => {
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.countdownStatus).toBe('paused');
                done();
            }, 2001);
        });

    });
    
});