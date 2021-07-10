import React from 'react'
import { connect } from 'react-redux'

function Todo (props) {
  console.log('props', props)
  return (
    <>
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" checked />
          <label>Taste JavaScript</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value="Create a TodoMVC template" />
      </li>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Buy a unicorn</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value="Rule the web" />
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
