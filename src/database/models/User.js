const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    _id: String,
    infos: {
      coins: String
    }
})

module.exports = model('users', userSchema)