import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo, fetchTodos } from '../actions/todosActions'

function AddTodo (props) {
  const [input, setInput] = useState('')

  function handleSubmit (e) {
    e.preventDefault()
    props.dispatch(addTodo({
      title: input,
      complete: false
    }))
    props.dispatch(fetchTodos())
    setInput('')
  }

  function handleChange (e) {
    const newTodo = e.target.value
    setInput(newTodo)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          onChange={handleChange}
          value={input} />
      </form>
    </>
  )
}

function mapStateToProps (state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(AddTodo)
