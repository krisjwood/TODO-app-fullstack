export const PENDING = 'PENDING'
export const SUCCESS = 'SUCCESS'
export const GETTODOS = 'GETTODOS'
export const ADDTODO = 'ADDTODO'
export const UPDATETODO = 'UPDATETODO'
export const DELETETODO = 'DELETETODO'

export function pending () {
  return {
    type: PENDING
  }
}

export function success () {
  return {
    type: SUCCESS
  }
}

export function getTodos () {
  return {
    type: GETTODOS
  }
}

export function addTodo (todo) {
  return {
    type: ADDTODO,
    todo
  }
}

export function updateTodo (id) {
  return {
    type: UPDATETODO,
    id
  }
}

export function deleteTodo (id) {
  return {
    type: DELETETODO,
    id
  }
}
