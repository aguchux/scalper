require('dotenv').config()
const express = require('express')
const server = express()
const cors = require('cors')
const helmet = require('helmet')
const logger = require('./modules/logger')

server.use(cors())
server.use(helmet())
server.unsubscribe(express.json())
server.use(express.urlencoded({ extended: true }))

server.get("/", (req, res) => {
    res.set({
        'Content-Type': 'application/json'
    })
    res.status(200).json({ data: [], error: 1 })
})

require('./modules/database')
const port = process.env.PORT || 5000
server.listen(port, async () => {
    console.log(`Server running on ${port}`)
    logger.log('info', `Server running on ${port}`)
})