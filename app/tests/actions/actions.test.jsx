import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
    it('should generate search text action', () => {
        var testAction = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };

        var res = actions.setSearchText(testAction.searchText);

        expect(res).toEqual(testAction);
    });

    it('should generate toggle show completed action', () => {
        var testAction = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        var res = actions.toggleShowCompleted();

        expect(res).toEqual(testAction);
    });

    it('should generate add todo action', () => {
        var testAction = {
            type: 'ADD_TODO',
            todo: {
                id: '111',
                text: 'anything',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }
        };

        var res = actions.addTodo(testAction.todo);

        expect(res).toEqual(testAction);
    });

    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({});

        // console.log('store', store);

        const todoText = 'My todo item';

        store.dispatch(actions.startAddTodo(todoText))
            .then(() => {
                const actions = store.getActions();
                expect(actions[0]).toInclude({
                    type: 'ADD_TODO'
                });

                expect(actions[0].todo).toInclude({
                    text: todoText
                });
                done();
            }).catch(done);
    });

    it('should generate add todos action object', () => {
        var todos = [{
            id: '111',
            text: 'anything',
            completed: false,
            completedAt: undefined,
            createdAt: 33000
        }];

        var action = {
            type: 'ADD_TODOS',
            todos
        };

        var res = actions.addTodos(todos);

        expect(res).toEqual(action);
     });

    it('should generate add todo action', () => {
        var testAction = {
            type: 'TOGGLE_TODO',
            id: 1
        };

        var res = actions.toggleTodo(testAction.id);

        expect(res).toEqual(testAction);
    });
});

