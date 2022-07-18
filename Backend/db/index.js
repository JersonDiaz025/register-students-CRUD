const mongoose = require('mongoose');

const URL = process.env.MONGODB_URL;

const connection_db = mongoose.connect = (URL, {useNewUrLParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connection success to DB');
});

connection.on('err', () => {
    console.log('Error connecting to db');
});

module.exports = function connect(){
    return connection_db
}