const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('../routes/routes.js');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// middlewars
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// use routes
app.use(routes);


const port = process.env.PORT || 3001;
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {useNewUrLParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connection success to DB');
});

connection.on('err', (err) => {
    console.log('Error connecting to db', err.message);
});

app.listen(port, () => {
    console.log(`Server started in port: ${port}`);
});



