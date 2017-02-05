var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');
export var AddTodo = React.createClass({
    handleSubmit : function (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var Todo = this.refs.todoText.value;
        if(Todo.length > 0) {
            this.refs.todoText.value = "";
            dispatch(actions.startAddTodo(Todo));
        } else {
            this.refs.todoText.focus();
        }

    },
    render : function () {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="Whats do you need to do?" />
                    <input type="submit" value="Add Todo" className="button expanded" />
                </form>
            </div>
        );
    }
});

export default connect()(AddTodo);