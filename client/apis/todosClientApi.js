import request from 'superagent'

const routeUrl = '/api/v1/todos'

export function getTodosApi () {
  return request
    .get(routeUrl)
    .then((res) => res.body)
}

export function postTodoApi (todo) {
  return request
    .post(routeUrl)
    .send(todo)
    .then((res) => res.body)
}

export function patchTodoApi (todo) {
  return request
    .patch(routeUrl)
    .send(todo)
    .then((res) => res.body)
}

export function deleteTodoApi (id) {
  return request
    .delete(routeUrl)
    .send(id)
    .then((res) => res.body)
}
