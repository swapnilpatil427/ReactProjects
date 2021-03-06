import firebase, {firebaseRef} from 'app/firebase/index';
import moment from 'moment';
export var setSearchText = (searchText) => {
    return {
        type : 'SET_SEARCH_TEXT',
        searchText
    };
};

export var addTodo = (todo) => {
    return {
        type : 'ADD_TODO',
        todo
    };
};

export var addTodos = (todos) => {
    return {
        type : 'ADD_TODOS',
        todos
    }
}

export var toggleShowCompleted = () => {
    return {
        type : 'TOGGLE_SHOW_COMLETED'
    };
};

export var toggleTodo = (id) => {
    return {
        type : 'TOGGLE_TODO',
        id 
    };
};

export var startAddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = {
                    text : text,
                    completed: false, 
                    createdAt: moment().unix(),
                    completedAt: null
        };

        var todoRef = firebaseRef.child('todos');
        return todoRef.push(todo).then(() => {
            dispatch(addTodo({
                ...todo,
                id : todoRef.key
            }));
        });
    };
};