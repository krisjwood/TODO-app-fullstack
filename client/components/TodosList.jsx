import React, { useEffect } from 'react'
import { fetchTodos } from '../actions/todosActions'
import Todo from './Todo'
import { connect } from 'react-redux'

function TodoList (props) {
  useEffect(() => {
    props.dispatch(fetchTodos())
  }, [])

  return (
    <>
      {/* <!-- This section should be hidden by default and shown when there are todos --> */}
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {/* <!-- These are here just to show the structure of the list items --> */}
          {/* <!-- List items should get the class `editing` when editing and `completed` when marked as completed --> */}
          <Todo />
        </ul>
      </section>
      <footer className="footer">
        {/* <!-- This should be `0 items left` by default --> */}
        <span className="todo-count"><strong>0</strong> item left</span>
        {/* <!-- Remove this if you don't implement routing --> */}
        <ul className="filters">
          <li>
            <a className="selected" href="#/">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        {/* <!-- Hidden if no completed items are left ↓ --> */}
        <button className="clear-completed">Clear completed</button>
      </footer>
    </>
  )
}

function mapStateToProps (state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList)
