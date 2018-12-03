import { receiveTodos, receiveTodo, RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions';
import { merge } from 'lodash/merge';

const initialState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    },
};

export default (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TODOS:
            let todohsh = {};
            action.todos.map (todo => todohsh[todo.id] = todo );
            return todohsh;
        case RECEIVE_TODO:
            let obj = {};
            obj[action.todo.id] = action.todo;
            return Object.assign({}, state, obj);
        default:
            return state;
    };
};