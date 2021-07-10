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

function addTodo (todo, db = connection) {
  const { title, description, priority, complete } = todo
  return db('todos')
    .insert({
      title,
      description,
      priority,
      complete
    })
}

function editTodo (db = connection) {}

function deleteTodo (db = connection) {}
