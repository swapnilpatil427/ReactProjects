import expect from 'expect';
import * as  actions from 'actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var createMockStore = configureMockStore([thunk]);

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
            todo : {
                    id : 'asdas',
                    text : 'test todo',
                    completed : false,
                    createdAt : 120
            }
        };

        var res = actions.startAddTodo(action.todo);

        expect(res).toEqual(action);
    });

    it('should create to and dispatch add Todo',(done) => {
        const store = createMockStore();
        const todoText = 'My todo Item';

        store.dispatch(actions.startAddTodo(todoText)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toInclude({
                type : 'ADD_TODO'
            });

            expect(actions[0].todo).toInclude({
                text : todoText
            });

            done();
        }).catch(done);
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