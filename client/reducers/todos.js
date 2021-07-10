import {
  GETTODOS,
  ADDTODO,
  UPDATETODO,
  DELETETODO
} from '../actions/todosActions'

function todos (state = [], action) {
  switch (action.type) {
    case GETTODOS:
      return action.todos
    case ADDTODO:
      return action.todo
    case UPDATETODO:
      return action.todo
    case DELETETODO:
      return null
      // return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

export default todos
