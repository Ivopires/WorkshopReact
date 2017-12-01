import React from 'react'

import { Button, Input } from 'semantic-ui-react'

import '../css/AddTodo.css'

let AddTodoForm = ({ onSubmit }) => {
  let input

  return (
    <div className='AddTodo'>
      <form onSubmit={e => {
        e.preventDefault()
        const input = document.querySelector('input[name=todo]')
        if (!input.value.trim()) {
          return
        }
        onSubmit(input.value)
        input.value = ''
      }}>
        <Input className='TodoText' placeholder='Task...' name='todo' />
        <Button className='TodoButton' basic type='submit'>
          Add Todo
        </Button>
      </form>
    </div >
  )
}

export default AddTodoForm;
