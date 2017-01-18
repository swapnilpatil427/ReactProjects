var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer Component', () => {
    it('should exists', ()=> {
        expect(Timer).toExist();
    });

    describe('handleSetTimer', () => {
        it('should start timer on started status', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer />);
            
            timer.handleStatusChanged('started');
            expect(timer.state.count).toBe(0);

            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('started');
                expect(timer.state.count).toBe(1);
                done();
            }, 1001)
        });

        it('should pause timer on paused status', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer />);
            timer.setState ({
                count : 10
            });
            timer.handleStatusChanged('started');
            timer.handleStatusChanged('paused');
            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('paused');
                expect(timer.state.count).toBe(10);
                done();
            }, 1001)
        });

        it('should clear count on stopped status', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer />);
            timer.setState ({
                count : 10
            });
            timer.handleStatusChanged('started');
            timer.handleStatusChanged('stopped');
            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('stopped');
                expect(timer.state.count).toBe(0);
                done();
            }, 1001)
        });

    }); 
    
});