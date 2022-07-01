const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ScalperDB'

mongoose.connect(uri, {
    useNewUrlParser: true
})

const connection = mongoose.connection
connection.once('open', () => {
    console.log(`MongoDB is connected`)
})
connection.on('error', () => {
    console.log(`MongoDB failed`)
})

module.exports = connection