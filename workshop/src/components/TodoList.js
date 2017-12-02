import React from 'react'
import { PropTypes } from 'prop-types'
import { VisibilityFilters as vf } from "../actions/actionTypes";
import Todo from './Todo'

import '../semantic/out/semantic.min.css'

const TodoList = ({ todos, onTodoClick }) => (
    <div className='ui middle aligned selection divided list'>
        {todos.map((todo) => (
            <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
    </div>
)

TodoList.proptyps = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList;
