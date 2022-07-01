const mongoose = require('mongoose')
const sequence = require('mongoose-sequence')


const logSchema = new mongoose.Schema({
    log: String,
    date: {
        type: Date,
        default: Dat.now
    }
})

logSchema.plugin(sequence, { inc_field: 'id' })
module.exports = mongoose.model("Logs", logSchema)