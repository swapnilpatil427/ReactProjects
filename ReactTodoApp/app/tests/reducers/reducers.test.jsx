var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');
describe('Reducers', () => {
    describe('search Text Reducer', () => {
        it('should set searchText', () => {
            var action = {
                type : 'SET_SEARCH_TEXT',
                searchText : 'dog'
            };

            var res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('ShowCompleted Reducer', () => {
        it('should toggle ShowCompleted', () => {
            var action = {
                type : 'TOGGLE_SHOW_COMLETED',
            };

            var res = reducers.showCompletedReducer(df(true), df(action));

            expect(res).toEqual(false);
        });
    });

    describe('Todo Reducer', () => {
        it('Should add new todo', () => {
            var action = {
                type : 'ADD_TODO',
                todo : {
                    id : 'asdas',
                    text : 'test todo',
                    completed : false,
                    createdAt : 120
                }
            };

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });

        it('Should toggle todo', () => {
            var todos = [{
                id : 1,
                text : 'test',
                completed : true,
                createdAt : 123,
                completedAt : 125
            }];
            var action = {
                type : 'TOGGLE_TODO',
                id : 1
            };

            var res = reducers.todosReducer(df(todos), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);
        });
    });

});