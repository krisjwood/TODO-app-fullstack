import {
  getTodos
} from '../apis/todosClientApi'

export const GETTODOS = 'GETTODOS'
export const ADDTODO = 'ADDTODO'
export const UPDATETODO = 'UPDATETODO'
export const DELETETODO = 'DELETETODO'

export function getAction (todos) {
  return {
    type: GETTODOS,
    todos
  }
}

// export function addAction (todo) {
//   return {
//     type: ADDTODO,
//     todo
//   }
// }

// export function updateAction (id) {
//   return {
//     type: UPDATETODO,
//     id
//   }
// }

// export function deleteAction (id) {
//   return {
//     type: DELETETODO,
//     id
//   }
// }

export function fetchTodos () {
  return dispatch => {
    return getTodos()
      .then(todos => {
        dispatch(getAction(todos))
        return null
      })
  }
}
