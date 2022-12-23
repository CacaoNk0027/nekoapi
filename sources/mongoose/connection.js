require('dotenv').config();
const mongoose = require('mongoose')

exports.connectDatabase = () => {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.uri)
    mongoose.connection.once('open', () => console.info('database connection opened'));
}