var redux = require('redux');

console.log('starting redux');9
var stateDefault = {
    name : 'default',
    hobbies : []
}
// Reducer takes existing state and action to produce new state.
var oldreducer = (state = stateDefault, action) => {
   //  state = state || {name : 'Anonymous'};
   switch (action.type) {
       case 'CHANGE_NAME' :
            return {
                ...state,
                name : action.name
            }
        default :
            return state;
   }
};
var reducer = redux.combineReducers({
    name : nameReducer,
});
var store = redux.createStore(reducer);
var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME' : 
            return state;
        default : 
            return state;
    }
}

var currentState = store.getState();

console.log("current state" + currentState);

var action = {
    type : 'CHANGE_NAME',
    name : 'andrew'
}

store.dispatch(action);

console.log('State returned value after changing name action');
console.log(store.getState());
