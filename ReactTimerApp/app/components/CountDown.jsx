var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');
var CountDown = React.createClass({
    // Countdown can have states 'stopped' 'started' 'paused'
    getInitialState : function () {
        return {
            count : 0,
            countdownStatus : 'stopped'
        }
    },
    componentDidUpdate : function (prevProps, prevState) {
        if(this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started' :
                    this.startTimer(); 
                    break;
                case 'stopped' :
                    this.endTimer();
                    break;
            }
        }
    },
    startTimer : function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count : newCount >= 0 ? newCount : 0
            });
            
        }, 1000);
    },
    handleSetCountDown : function (seconds) {
        this.setState ({
            count : seconds,
            countdownStatus : 'started'
        });
    },
    render: function () {
        var {count} = this.state;
        return (
            <div className="page-title-margin-top">
                <p className="text-center page-title">
                    Count Down
                </p>
                <Clock totalSeconds={count}/>
                <CountDownForm onSetCountdown={this.handleSetCountDown}/>
            </div>
        )
    }
});

module.exports = CountDown;