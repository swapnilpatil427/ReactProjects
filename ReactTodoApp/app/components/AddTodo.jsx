var React = require('react');

var AddTodo = React.createClass({
    handleSubmit : function (e) {
        e.preventDefault();
        var Todo = this.refs.todoText.value;
        if(Todo.length > 0) {
            this.refs.todoText.value = "";
            this.props.onAddTodo(Todo);
        } else {
            this.refs.todoText.focus();
        }

    },
    render : function () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="Whats do you need to do?" />
                    <input type="submit" value="Add Todo" className="button expanded" />
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;