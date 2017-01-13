var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');
var Greeter = React.createClass({
    getDefaultProps: function () {
        return {name: "ReactDemo"};
    },
    getInitialState: function () {
        return {name: this.props.name};
    },
    onButtonClick: function (e) {
        e.preventDefault();
        var name = this.refs.name.value;
        this.refs.name.value = "";
        this.setState({name: name});
        // alert(name);
    },
    handleNewName : function (name) {
        this.setState ({
            name : name
        });
    },
    render: function () {
        var name = this.state.name;
        return (
            <div>
                <GreeterMessage name={name}/>
                <GreeterForm onNewName={this.handleNewName}/>
            </div>
        );
    }
});

module.exports = Greeter;