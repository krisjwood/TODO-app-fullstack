const connection = require('./connection')

module.exports = {
  listTodos,
  addTodo,
  editTodo,
  deleteTodo
}

function listTodos (db = connection) {
  return db('todos').select()
}

function addTodo (db = connection) {}

function editTodo (db = connection) {}

function deleteTodo (db = connection) {}
