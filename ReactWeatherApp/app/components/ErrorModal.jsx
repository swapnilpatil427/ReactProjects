var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
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
        var {errorMessage, title} = this.props;
       var callmodalMarkup =  (<div id="error-modal" ref="errorModal" className="reveal tiny text-center" data-reveal=""> 
                <h4> 
                    {title}
                </h4>
                <p> 
                    {errorMessage}
                </p>
                <p>
                    <button className="button hollow" data-close=""> Okay </button>
                </p>
       </div>);
    
       var $modal = $(ReactDOMServer.renderToString(callmodalMarkup));
       $(ReactDOM.findDOMNode(this)).html($modal);
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function () {
        return (
            <div>
            </div>
        )
    }
});

module.exports = ErrorModal;
