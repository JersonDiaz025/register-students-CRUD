require('dotenv').config();
require('../database/connection-db');
require('../auth/local-auth');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes/routes.js');
const cors = require('cors');
const flash = require('connect-flash');
const passport = require('passport');
const morgan = require('morgan');
const session = require('express-session');

const port = process.env.PORT || 3008;

// Initialization
const app = express();
require('../database/connection-db');
require('../auth/local-auth');

app.use(express.json());
app.use(cors());
// use routes
app.use(routes);

// middlewars
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'SECRET',
    resave: false,
    saveUninitialized: false,
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());



app.listen(port, () => {
    console.log(`Server started in port: ${port}`);
});



