const mongoose = require('mongoose')

const uri = process.env.MONGODB_URI || 'mongodb://localhost: 27017/scalperdb'
const connect = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true
        })
        console.log(`MongoDb connected...`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
module.exports = connect
