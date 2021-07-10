import React from 'react'
import { connect } from 'react-redux'
import deleteTodo from './actions/todosActions'

function Todo (props) {
  function onChangeHandler () {} // do something with this? Helped get rid of a checked warning in console

  function clickDelete (e) {
    const id = e.target.value
    console.log(id)
    props.dispatch(deleteTodo())
  }
  return (
    <>
      <li className={props.complete ? 'completed' : ''}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={props.complete} onChange={onChangeHandler} />
          <label>{props.title}</label>
          <button className="destroy" onClick={clickDelete} value={props.id}></button>
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
