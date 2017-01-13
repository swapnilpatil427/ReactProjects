var React = require('react');

var GreeterMessage = React.createClass ({
    render : function () {
        var name = this.props.name;
        return (
             <div>
                    Hello {name}
                    !!!!
            </div>
        );
    }
});

module.exports = GreeterMessage;