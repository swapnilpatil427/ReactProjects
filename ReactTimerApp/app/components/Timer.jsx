var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');
var Timer = React.createClass({
    getInitialState: function () {
        return {count: 0, timerStatus: 'stopped'};
    },
    componentDidUpdate : function (prevProps, prevState) {
        if(this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started' :
                    this.handleStart ();
                    break;
                case 'stopped' : 
                    this.setState({count : 0});
                case 'paused' : 
                    clearInterval(this.Timer);
                    this.Timer = undefined;
                    break;
            }
        }
    },
    handleStart : function () {
        this.Timer = setInterval(() => {
            this.setState({count : this.state.count + 1});
        },1000)
    },
    componentWillUnmount : function () {
        clearInterval(this.Timer);
        this.Timer = undefined;
    },
    handleStatusChanged : function (newStatus) {
        this.setState ({
            timerStatus: newStatus
        });
    },
    render: function () {
        var {count, timerStatus} = this.state;
        return (
            <div>
                <div className="page-title-margin-top">
                    <p className="text-center page-title">
                        Timer App
                    </p>
                    <Clock totalSeconds={count}/>
                    <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChanged} />
                </div>
            </div>

        )
    }
});

module.exports = Timer;