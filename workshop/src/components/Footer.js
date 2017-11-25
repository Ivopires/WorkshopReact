import React, {Component} from 'react'
import Divider from 'material-ui/Divider'
import TodoActions from './TodoActions'
import FilterLink from '../containers/FilterLink'

/*
const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink filter='SHOW_ALL'>
            All
        </FilterLink>
        {', '}
        <FilterLink filter='SHOW_ACTIVE'>
            Active
        </FilterLink>
        {', '}
        <FilterLink filter='SHOW_COMPLETED'>
            Completed
        </FilterLink>
    </p>
)
*/

const Footer = ({todos, currentFilter, handleFilter, handleRemovedCompleted, handleCompleteAll}) => {

    const leftTodos = todos.reduce((count, {completed}) => completed ? count : count + 1, 0);

    return (
        <div>
            <Divider style={styles.divider}/>
            <div style={styles.container}>
                <span style={styles.itemsCount}>
                    {leftTodos} items left
                </span>

                <TodoActions
                    currentFilter={currentFilter}
                    handleFilter={handleFilter}
                    handleRemovedCompleted={handleRemovedCompleted}
                    handleCompleteAll={handleCompleteAll}
                />
            </div>
        </div>
    );
};

const styles = {
    divider:{
        marginBottom:25
    },
    container:{
        display: 'flex',
        justifyContent: 'center'
    },
    itemsCount:{
        alignSelf:'center',
        marginRight: 10
    }
};

export default Footer;