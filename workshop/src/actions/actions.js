import types from './actionTypes'

let nextTodoId = 0;

//1. Takes the text from AddTodo field and returns proper "Action"
//JSON to send to other components.
export const addToDo = (text) => {
    return {
        type: types.ADD_TODO,
        id: nextTodoId++,
        text,
        completed: false
    }
}

//2. Takes the filter string and returns proper "Action"
//JSON to send to other components.
export const setVisibilityFilter = (filter) => {
    return {
        type: types.SET_VISIBILITY_FILTER,
        filter
    }
}

//3. Takes Todo's items id and returns proper "Action"
//JSON to send to other components
export const toggleToDo = (id) => {
    return {
        type: types.TOGGLE_TODO,
        id
    }
}

export const editTodo = (id, text) => ({
    type: types.EDIT_TODO,
    id,
    text
});

export const removeTodo = (id) => ({
    type: types.REMOVE_TODO,
    id
});

/* export const completeAll = (id) => ({
    type: types.COMPLETE_ALL,
});

export const removeCompleted = (id) => ({
    type: types.REMOVE_COMPLETED,
}); */
