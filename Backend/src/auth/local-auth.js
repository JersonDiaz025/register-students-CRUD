const res = require('express/lib/response');
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

passport.use('local-signUp', new Strategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true

}, async (req, email, password, done) => {

    // verifi existent users in db
    const verifyUserExistent = User.findOne({ email: email });

    if (verifyUserExistent) {
        return done(null, false, req.flash('signUpMsg', 'E-mail already exist'));
    } else {

        const newUser = new User();
        newUser.email = email,
        newUser.password = newUser.encryptPassword(password);
        await newUser.save()
        done(null, newUser)
    }

}));