import React from 'react'
import {connect} from 'react-redux'
import {addToDo} from '../actions/actions'

const AddTodo = ({dispatch}) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if(!input.value.trim()){
                        return
                    }
                    dispatch(addToDo(input.value))
                    input.value = ''
                }}
            >

                <input
                ref={node => {
                    input = node
                }}/>

                <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
}

const Add_Todo = connect()(AddTodo)

export default Add_Todo