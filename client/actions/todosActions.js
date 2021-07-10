import {
  getTodosApi,
  deleteTodoApi,
  postTodoApi,
  patchTodoApi
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

export function addAction (todo) {
  return {
    type: ADDTODO,
    todo
  }
}

export function updateAction (id) {
  return {
    type: UPDATETODO,
    id
  }
}

export function deleteAction (id) {
  return {
    type: DELETETODO,
    id
  }
}

export function fetchTodos () {
  return dispatch => {
    return getTodosApi()
      .then(todos => {
        dispatch(getAction(todos))
        return null
      })
  }
}

export function deleteTodo (id) {
  return dispatch => {
    return deleteTodoApi(id)
  }
}

export function addTodo (todo) {
  return dispatch => {
    return postTodoApi(todo)
  }
}

export function updateTodo (todo) {
  return dispatch => {
    return patchTodoApi(todo)
  }
}
