const dotenv = require("dotenv");

dotenv.config();


  const { connect } = require("mongoose");
    const uri = process.env.MONGO_URL
const Models = require('./src/database/models/Models')

var connectdb = async function(){
    const uri = process.env.MONGO_URL
const connection = await connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
console.log('Database conectada com sucesso!')

this.db = { connection, ...Models }
}

module.exports.connectdb = connectdb;