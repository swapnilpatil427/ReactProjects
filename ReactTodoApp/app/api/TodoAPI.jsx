var $ = require('jQuery');
module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        try {
            todos = JSON.parse(stringTodos);

        } catch (e) {}

        return $.isArray(todos)
            ? todos
            : [];
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filterTodos = todos;
        // Filter by showCompleted
        var filterTodos = filterTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        // filter by searchText
        filterTodos = filterTodos.filter((todo) => {

            var text = todo
                .text
                .toLowerCase();
            return (searchText.leength === 0 || text.indexOf(searchText) > -1);
            // text.indexOf(searchText.toLowerCase());
        });

        // Sort todos with non-completed first
        filterTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });
        return filterTodos;
    }
};