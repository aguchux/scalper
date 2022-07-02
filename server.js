require('dotenv').config()
const express = require('express')
const server = express()
const cors = require('cors')
const path = require('path')

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

const Logs = require('./models/logs')

// API //
server.get("/api/v1", (req, res) => {
    const nlog = new Logs({
        log: 'we are here'
    })
    nlog.save()
        .then((docs) => {
            res.json({ data: docs });
        })
        .catch((error) => {
            console.log(error)
        })
})
// API //

if (process.env.NODE_ENV == 'production') {
    server.use(express.static(path.join(__dirname, 'frontend/dist')))
    server.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
    })
} else {
    server.get("/", (req, res) => {
        res.send("API Sent");
    })
}

// connect Db
const connect = require('./modules/database')
connect()
const port = process.env.PORT || 5000
server.listen(port, async () => {
    console.log(`Server running on ${port}`)
})