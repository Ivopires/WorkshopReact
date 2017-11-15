import types from './actionTypes'

let nextTodoId = 0

export const addToDo = (text) => ({
    type: types.ADD_TODO,
        id: nextTodoId++,
        text
})

export const setVisibilityFilter = (filter) => ({
    type: types.SET_VISIBILITY_FILTER,
    filter
})

export const toggleToDo = (id) => ({
    type: types.TOGGLE_TODO,
    id
})
