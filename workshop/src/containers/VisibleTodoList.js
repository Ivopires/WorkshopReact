import { connect } from 'react-redux'
import { toggleToDo } from '../actions/actions';
import TodoList from '../components/TodoList'
import { VisibilityFilters as vf } from '../actions/actionTypes'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case vf.SHOW_ALL:
            return todos
        case vf.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        case vf.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        default:
            return todos
    }
};

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleToDo(id))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
