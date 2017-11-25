import React, {Component} from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

class TodoActions extends Component {

    render() {
        const{
            currentFilter,
            handleFilter,
            handleRemoveCompleted,
            handleCompleteAll
        } = this.props;

        return(
            <div style={styles.container}>
                <RadioButtonGroup
                    name='filter'
                    defaultSelected={currentFilter}
                    onChange = {(e, value) => handleFilter(value)}
                    style={styles.radioButtonGroup}
                >
                    <RadioButton
                        label='All'
                        value='all'
                        styles={styles.radioButton}
                        />
                    <RadioButton
                        label='Active'
                        value='active'
                        styles={styles.radioButton}
                    />
                    <RadioButton
                        label='Completed'
                        value='completed'
                        styles={styles.radioButton}
                    />
                </RadioButtonGroup>
                <IconButton onTouchTap={handleRemoveCompleted}>
                    <FontIcon
                        className='material-icons'
                        color='red'>
                        Clear
                    </FontIcon>
                </IconButton>
                <IconButton onTouchTap={handleCompleteAll}>
                    <FontIcon
                        className='material-icons'
                        color='blue'>
                        Done All
                    </FontIcon>
                </IconButton>
            </div>
        );
    }
}

const styles = {
    container:{
        display: 'flex',
        justifyContent: 'center'
    },

    radioButtonGroup:{
        display: 'flex',
        alignItems: 'center',
        margin: '0 20px'
    },

    radioButton:{
        width:100,
        marginRight: 10
    }
};

export default TodoActions