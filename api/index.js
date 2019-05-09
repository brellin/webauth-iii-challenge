const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const auth = require('./auth')
const users = require('./users')

const server = express()

server.use(morgan('dev'))
server.use(helmet())
server.use(cors())
server.use(express.json())

server.get('/', (req, res) => {
    res.status(400).json({ message: 'This is not the endpoint you are looking for.' })
})

server.use('/api/auth', auth)
server.use('/api/users', users)

module.exports = server
