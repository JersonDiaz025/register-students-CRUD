const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const User = require('../models/users');

// sewrializar datos para que el usuario pueda navegar en distintas paginas 
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user)
})

passport.use('local-sign', new Strategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true

}, async (req, email, password, done) => {
    const user = new User();
    user.email = email,
    user.password = password;
    await user.save();
    done(null, user);
}));