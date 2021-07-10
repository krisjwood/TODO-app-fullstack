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

function editTodo (updatedTodo, db = connection) {
  const { id, title, description, priority, complete } = updatedTodo
  return db('todos')
    .where('id', id)
    .update({
      title,
      description,
      priority,
      complete
    })
}

function deleteTodo (id, db = connection) {
  const numId = Number(id)
  return db('todos')
    .where('id', numId)
    .del()
}
