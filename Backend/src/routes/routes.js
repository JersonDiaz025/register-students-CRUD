const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const passport = require('passport');


// Home route
router.get('/', controller.getHome);

// view all info students
router.get('/all-students', controller.getAllInfoStudents);

// post params from form
router.post('/add-student-data', controller.postDataFormulary);

// post params formulary login
router.post('/login', passport.authenticate('local-sign', {
    successRedirect: '/',
    failureRedirect: '/login',
    passReqToCallback: true
}))

// update info students
router.put('/update-students/:id', controller.updateInfoStudents);

//route for delete info students
router.delete('/delete-students/:id', controller.deleteStudents);


module.exports = router;