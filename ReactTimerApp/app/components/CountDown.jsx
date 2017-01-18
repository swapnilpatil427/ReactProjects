var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');
var CountDown = React.createClass({
    getInitialState : function () {
        return {
            count : 0
        }
    },
    handleSetCountDown : function (seconds) {
        this.setState ({
            count : seconds
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