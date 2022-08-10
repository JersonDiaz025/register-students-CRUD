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

// post params formulary login
// router.post('/sign-up', controller.posDatalogin);
router.post('/sign-up', (passport.authenticate('signUp', {
    // successRedirect: '/contact',
    /* Redirecting to the sign-up page if the user fails to login. */
    // failureRedirect: '/sign-Up',
    passReqToCallback: true
})));
// update info students
router.put('/update-students/:id', controller.updateInfoStudents);

//route for delete info students
router.delete('/delete-students/:id', controller.deleteStudents);

module.exports = router;