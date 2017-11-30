import AddTodoForm from '../components/AddTodo'

import { connect } from 'react-redux'
import { addToDo } from '../actions/actions'

//Implement and send onSubmit callback as a prop to presentation component
const mapDispatchToProp = (dispatch) => {
    return {
        onSubmit: (text) => {
            dispatch(addToDo(text))
        }
    }
}

//Connect Redux to the Container and wrap "AddTodoForm" presentation component
let AddTodo = connect(null, mapDispatchToProp)(AddTodoForm)
export default AddTodo;
