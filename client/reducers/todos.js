import {
  GETTODOS
} from '../actions/todosActions'

function todos (state = [], action) {
  switch (action.type) {
    case GETTODOS:
      return action.todos
    // case ADDTODO:
    //   return addTodo()
    // case UPDATETODO:
    //   return updateTodo()
    // case DELETETODO:
    //   return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

export default todos
