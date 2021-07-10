import {
  GETTODOS,
  ADDTODO,
  UPDATETODO,
  DELETETODO
} from '../actions/todosActions'

function todosReducer (state = [], action) {
  switch (action.type) {
    case GETTODOS:
      return null
    case ADDTODO:
      return null
    case UPDATETODO:
      return null
    case DELETETODO:
      return null
  }
}

export default todosReducer
