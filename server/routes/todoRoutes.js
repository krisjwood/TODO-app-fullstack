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
      res.status(500).send('GET DATABASE ERROR: ', err.message)
    })
})

// POST /api/v1/todos
router.post('/', (req, res) => {
  const { title, description, priority, complete } = req.body
  const todo = { title, description, priority, complete }

  db.addTodo(todo)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// PATCH /api/v1/todos
router.patch('/', (req, res) => {
  const { id, title, description, priority, complete } = req.body
  const updatedTodo = { id, title, description, priority, complete }
  db.editTodo(updatedTodo)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// DELETE /api/v1/todos
router.delete('/', (req, res) => {
  const { id } = req.body
  db.deleteTodo(id)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
