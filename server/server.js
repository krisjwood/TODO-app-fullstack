const express = require('express')
const path = require('path')

const server = express()

const todoRoute = require('./routes/todoRoutes')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// NEVER PUT THIS ABOVE CODE ON LINES 8&9
server.use('/api/v1/todos', todoRoute)

module.exports = server
