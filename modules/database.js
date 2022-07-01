const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ScalperDB'
const logger = require('../modules/logger')

mongoose.connect(uri, {
    useNewUrlParser: true
})

const connection = mongoose.connection
connection.once('open', () => {
    logger.log('info', `MongoDB is connected`)
    console.log(`MongoDB is connected`)
})
connection.on('error', () => {
    console.log(`MongoDB failed`)
    logger.log('info', `MongoDB failed`)
})

module.exports = connection