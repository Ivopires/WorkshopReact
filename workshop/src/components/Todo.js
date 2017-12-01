import React from 'react'
import { PropTypes } from 'prop-types'
import { Checkbox } from 'semantic-ui-react'

import '../semantic/out/semantic.min.css'

const Todo = ({ onClick, completed, text }) => (
  <div className='item'>

    <Checkbox onClick={onClick} checked={completed} label={(
      <label style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </label>
    )} />

  </div>
)

Todo.PropTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
