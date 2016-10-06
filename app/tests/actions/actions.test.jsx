var expect = require('expect');
var actions = require('actions');

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
            text: 'Thing to do'
        };

        var res = actions.addTodo(testAction.text);

        expect(res).toEqual(testAction);
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

