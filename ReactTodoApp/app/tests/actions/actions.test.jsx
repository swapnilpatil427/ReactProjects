var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
    it('Should generate Search Text Action', () => {
        var action = {
            type : 'SET_SEARCH_TEXT',
            searchText : 'some text'
        };

        var res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });

     it('Should generate Add To do Action', () => {
        var action = {
            type : 'ADD_TODO',
            text : 'Thing to do'
        };

        var res = actions.addTodo(action.text);

        expect(res).toEqual(action);
    });

     it('Should generate Toggle Show Completed Action', () => {
        var action = {
            type : 'TOGGLE_SHOW_COMLETED',
        };

        var res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

     it('Should generate Toggle To do Action', () => {
        var action = {
            type : 'TOGGLE_TODO',
            id : '123'
        };

        var res = actions.toggleTodo(action.id);

        expect(res).toEqual(action);
    });
});