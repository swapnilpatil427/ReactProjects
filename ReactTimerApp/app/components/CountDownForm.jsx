var React = require('react');
var Clock = require('Clock');
var CountDownForm = React.createClass ({
    onFormSubmit : function (e) {
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;
        if(strSeconds.match(/^[0-9]+$/)) {
            this.refs.seconds.value = "";
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    },
    render : function () {
        return (
            <div >
                <form ref="form" onSubmit={this.onFormSubmit} className="countdown-form">
                    <input type="text" placeholder="Enter time in seconds" ref="seconds" />
                    <input type="submit" className="button expanded" value="Start" />
                </form>
            </div>
        )
    }
});

module.exports = CountDownForm;