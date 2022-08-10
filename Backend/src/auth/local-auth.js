const passport = require('passport');
const strategy = require('passport-local').Strategy;
const User = require('../models/users');

// sewrializar datos para que el usuario pueda navegar en distintas paginas
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
})

passport.use('signUp', new strategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true

}, (req, email, password, done) => {

    // verifi existent users in db
    const verifyUserExistent = User.findOne({ email: email });

    // if (verifyUserExistent) {
    //     return next(new ErrorResponse("This user exist", 400));

    // } else {
        const newUser = new User();
        newUser.email = email,
        newUser.password =  newUser.encryptPassword(password);
        newUser.save()
        done(null, newUser)
    // }
    // if (!email || !password) {
    //     return next(new ErrorResponse("Please provide an email and password", 400));
    // }


    // if (verifyUserExistent) {
    //     return done(null, false);
    // } else {

    // }

}));