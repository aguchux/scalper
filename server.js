require('dotenv').config()
const express = require('express')
const server = express()
const cors = require('cors')
const path = require('path')

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

const Logs = require('./models/logs')


server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/dist/index.html"));
})

require('./modules/database')
const port = process.env.PORT || 5000
server.listen(port, async () => {
    console.log(`Server running on ${port}`)
})