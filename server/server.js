const express = require('express')
const path = require('path')

const server = express()

const todoRoute = require('./routes/todoRoutes')
server.use('/api/v1/todos', todoRoute)

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

module.exports = server
