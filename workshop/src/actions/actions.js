import types from './actionTypes'

let nextTodoId = 0;

export const addToDo = (text) => ({
    type: types.ADD_TODO,
        id: nextTodoId++,
        text
});

export const setVisibilityFilter = (filter) => ({
    type: types.SET_VISIBILITY_FILTER,
    filter
});

export const toggleToDo = (id) => ({
    type: types.TOGGLE_TODO,
    id
});

export const editTodo = (id, text) => ({
    type: types.EDIT_TODO,
    id,
    text
});

export const removeTodo = (id) => ({
    type: types.REMOVE_TODO,
    id
});

export const completeAll = (id) => ({
    type: types.COMPLETE_ALL,
});

export const removeCompleted = (id) => ({
    type: types.REMOVE_COMPLETED,
});