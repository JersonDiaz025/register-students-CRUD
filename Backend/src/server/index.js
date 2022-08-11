require('dotenv').config();
// require('../database/connection-db');
// require('../auth/local-auth');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes/routes.js');
const cors = require('cors');
// const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');


// Initialization
const app = express();
require('../database/connection-db');
require('../auth/auth');

const port = process.env.PORT || 3008;

app.use(express.json());
app.use(cors());

// middlewars
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'SECRET',
    resave: false,
    saveUninitialized: false,
}));

// app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// render message exist email user
// app.use((req, res, next) => {
//     app.locals.signUpMsg = req.flash('signUpMsg');
//     next();
// })
// use routes
app.use(routes);


app.listen(port, () => {
    console.log(`Server started in port: ${port}`);
});



