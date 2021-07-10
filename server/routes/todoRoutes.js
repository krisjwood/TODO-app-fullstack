const express = require('express')
const db = require('../db/dbFunctions') // DB functions
const router = express.Router()
module.exports = router

// GET /api/v1/todos
router.get('/', (req, res) => {
  db.listTodos()
    .then((todos) => {
      res.json(todos)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ', err.message)
    })
})

// POST /api/v1/todos
db.addTodo()

// PATCH /api/v1/todos
db.editTodo()

// DELETE /api/v1/todos
db.deleteTodo()
