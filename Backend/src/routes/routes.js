const express = require('express');
const passport = require('passport');
const router = express.Router();
const controller = require('../controllers/controller');


// Home route
router.get('/', controller.getHome);

// view all info students
router.get('/all-students', controller.getAllInfoStudents);

// post params from form
router.post('/add-student-data', controller.postDataFormulary);

// router.get('/sign-Up', controller.getSignUp)


// post params formulary login
// router.post('/sign-Up', controller.posDatalogin);
router.post('/sign-Up', passport.authenticate('local-signUp', {
    successRedirect: '/',
    failureRedirect: '/sign-Up',
    passReqToCallback: true

}))
// update info students
router.put('/update-students/:id', controller.updateInfoStudents);

//route for delete info students
router.delete('/delete-students/:id', controller.deleteStudents);


module.exports = router;