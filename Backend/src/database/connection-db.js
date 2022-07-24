const mongoose = require('mongoose');

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {useNewUrLParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connection success to DB');
});

connection.on('err', (err) => {
    console.log('Error connecting to db', err.message);
});