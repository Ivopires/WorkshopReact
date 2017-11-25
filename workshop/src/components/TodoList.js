import React, {Component} from 'react'
import {List} from 'material-ui/List'
import TodoRow from './TodoRow'
import Footer from './Footer'
import {VisibilityFilters as vf} from "../actions/actionTypes";
/*
const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {todos.map((todo) => (
            <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>
        ))}
    </ul>
)
*/

/*
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
*/

class TodoList extends Component{
    state={
        currentFilter: vf.SHOW_ALL
    };

    handleCompleteTodo = (id) =>{
        return () => this.prop.actions.toggleToDo(id);
    };

    handleRemoveTodo = (id) =>{
        return () => this.prop.actions.removeTodo(id)
    };

    handleFilter = (filter) =>{
        this.setState({
            currentFilter: filter
        });
    };

    handleRemoveCompleted = () =>{
        this.prop.actions.removeCompleted();
    };

    handleCompleteAll = () =>{
        this.prop.actions.completeAll();
    };

    render(){
        const {todos} = this.props;

        const {currentFilter} = this.state;

        const filteredTodos = todos.filter(({completed}) => {
            switch (currentFilter){
                case vf.SHOW_ACTIVE:
                    return !completed;
                case vf.SHOW_COMPLETED:
                    return completed;
                default:
                    return true;
            }
        });

        return(
            <div>
                <List>
                    {filteredTodos.map(todo =>
                        <TodoRow
                            key={todo.id}
                            todo={todo}
                            handleCompleteTodo={this.handleCompleteTodo}
                            handleRemoveTodo={this.handleRemoveTodo}
                        />
                    )}
                </List>

                <Footer
                    todos={todos}
                    handleFilter={this.handleFilter}
                    currentFilter={currentFilter}
                    handleRemoveCompleted={this.handleRemoveCompleted}
                    handleCompleteAll={this.handleCompleteAll}
                />
            </div>
        );
    }
}


export default TodoList;