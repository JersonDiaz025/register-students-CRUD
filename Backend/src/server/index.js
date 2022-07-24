require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes/routes.js');
require('../database/connection-db');
const cors = require('cors');

const port = process.env.PORT || 3008;

const app = express();

app.use(cors());
app.use(express.json());
// use routes
app.use(routes);

// middlewars
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.listen(port, () => {
    console.log(`Server started in port: ${port}`);
});



