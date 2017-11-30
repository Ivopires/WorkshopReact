import type from '../actions/actionTypes'

const todo = (state, action) => {
    switch (action.type) {
        case type.ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };

        case type.TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }

            return { ...state, completed: !state.completed };

        /*
        case type.REMOVE_TODO:
            return state.filter(todo =>
                todo.id !== action.id
            );
        case type.COMPLETE_ALL:
            const alreadyCompleted = state.every(({ completed }) => completed);

            return state.map(todo => ({
                ...todo,
                completed: alreadyCompleted //rever
            }));

        case type.REMOVE_COMPLETED:
            return state.filter(todo => todo.completed === true); */

        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {

        case type.ADD_TODO:
            return [...state,
            todo(undefined, action)];

        case type.TOGGLE_TODO:
            return state.map(t =>
                todo(t, action))

        default:
            return state;
    }
}

export default todos;
