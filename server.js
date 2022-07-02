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
server.get("/api/v1", async (req, res) => {
    const newLog = new Logs({
        log: "this is a new log"
    })
    await newLog.save()
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
        .finall(() => {
            process.exit(1)
        })
    res.json({ data: 'Good to go' });
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