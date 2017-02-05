var redux = require('redux');

var stateDefault = {
    searchText : '',
    showCompleted : false,
    todos : [
        
    ]
};
var reducer = (state = stateDefault, action) => {
    console.log('New action');
    console.log(action);

    switch(action.type) {
        case 'CHANGE_SEARCH_TEXT' : 
            return {
                ...state,
                searchText : action.searchText
            }
        default : 
            return state;
    }
};

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

console.log(store.getState());

var action = {
    type : 'CHANGE_SEARCH_TEXT',
    searchText : 'Andrew'
}

var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    console.log('Name is : ', state.searchText);
});

store.dispatch(action);

unsubscribe();

// Subscribe to changes


action.searchText = 'swapnil';
store.dispatch(action);