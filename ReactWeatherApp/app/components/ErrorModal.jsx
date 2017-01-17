var React = require('react');

var ErrorModal = React.createClass({
    propTypes : {
        title : React.PropTypes.string,
        errorMessage : React.PropTypes.string.isRequired // Makes it required
    },
    getDefaultProps :function () {
        return {
            title : "Error"
        }
    },
    componentDidMount : function () {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function () {
        var {errorMessage, title} = this.props
        return (
            <div id="error-modal" ref="errorModal" className="reveal tiny text-center" data-reveal=""> 
                <h4> 
                    {title}
                </h4>
                <p> 
                    {errorMessage}
                </p>
                <p>
                    <button className="button hollow" data-close=""> Okay </button>
                </p>
            </div>
        )
    }
});

module.exports = ErrorModal;
