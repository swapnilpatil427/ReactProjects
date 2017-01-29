var  React = require('react');
var Todo = require('Todo');
var TodoList = React.createClass({
    render : function () {
        var {todos} = this.props;

        var rendertodos = () => {
            return todos.map((todo) => {
                return (
                    <Todo onToggle = {this.props.onToggle} key={todo.id} {...todo}/> // Spread operator. it spreads all the properties. so component will receive all the properties as separate pros
                )
            });
        };
        return (
            <div>
                {rendertodos()}
            </div>
        );
    }
});

module.exports = TodoList;