import request from 'superagent'

const routeUrl = '/api/v1/todos'

export function getTodos () {
  return request
    .get(routeUrl)
    .then((res) => res.body)
}

export function postTodo (todo) {
  return request
    .post(routeUrl)
    .send(todo)
    .then((res) => res.body)
}

export function patchTodo (todo) {
  return request
    .patch(routeUrl)
    .send(todo)
    .then((res) => res.body)
}

export function deleteTodo (id) {
  return request
    .delete(routeUrl)
    .send(id)
    .then((res) => res.body)
}
