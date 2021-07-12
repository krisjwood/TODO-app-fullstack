import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, updateTodo } from '../actions/todosActions'

function Todo (props) {
  const { id, complete, title } = props
  const todo = { id, complete, title }

  function onChangeHandler () {
    props.dispatch(updateTodo({
      ...todo,
      complete: !complete
    }))
  }

  function clickDelete () {
    props.dispatch(deleteTodo({ id }))
  }

  return (
    <>
      <li className={complete ? 'completed' : ''}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={complete} onChange={onChangeHandler} value={id} />
          <label>{title}</label>
          <button className="destroy" onClick={clickDelete}></button>
        </div>
        <input className="edit" />
      </li>
    </>
  )
}

function mapStateToProps (state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Todo)
