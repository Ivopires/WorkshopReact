import type from '../actions/actionTypes'

const todos = (state = [], action) => {
    switch(action.type){
        case type.ADD_TODO:
            return [...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }]

        case type.TOGGLE_TODO:
            return state.map(todo =>
                (todo.id == action.id)?
                    {...todo, completed: !todo.completed}
                    :todo)
        default:
            return state
    }
}

export default todos