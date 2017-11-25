import type from '../actions/actionTypes'

const initialState = [
    {
        id: 0,
        text: 'This is a todo',
        completed: false
    }
];

const todos = (state = initialState, action) => {
    switch(action.type){
        case type.ADD_TODO:
            return [...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }];

        case type.REMOVE_TODO:
            return state.filter(todo =>
                todo.id !== action.id
            );

        case type.TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)?
                    {...todo, completed: !todo.completed}
                    :todo);

        case type.COMPLETE_ALL:
            const alreadyCompleted = state.every(({completed}) => completed);

            return state.map(todo => ({
                ...todo,
                completed: alreadyCompleted //rever
            }));

        case type.REMOVE_COMPLETED:
            return state.filter(todo => todo.completed === true);

        default:
            return state
    }
}

export default todos