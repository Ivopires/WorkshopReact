import React, {Component} from 'react'
import {ListItem} from 'material-ui/List'
import CheckBox from 'material-ui/Checkbox'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'

class TodoRow extends Component {

    render() {
        const {todo, handleRemoveTodo, handleCompleteTodo} = this.props;

        return (
            <ListItem
                primaryText={todo.text}

                leftCheckBox={
                    <CheckBox
                        onCheck={handleCompleteTodo(todo.id)}
                        checked={todo.completed}
                    />
                }

                rightIconButton={
                    <IconButton onTouchTap={handleRemoveTodo(todo.id)}>
                        <FontIcon
                            className='material-icons'
                            color='red'
                        >
                            Clear
                        </FontIcon>
                    </IconButton>
                }

                style={todo.completed? styles.completed : {}}
            />
        );
    }
}

const styles = {
    completed: {
        color: 'gray',
        textDecoration: 'line-through'
    }
};

export default TodoRow;