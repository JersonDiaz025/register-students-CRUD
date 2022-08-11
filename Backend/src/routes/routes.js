const express = require('express');
// const passport = require('passport');
const router = express.Router();
const controller = require('../controllers/controller');

const { signIn, signUp } = require('../auth/auth')

// Home route
router.get('/', controller.getHome);

// view all info students
router.get('/all-students', controller.getAllInfoStudents);

// post params from form
router.post('/add-student-data', controller.postDataFormulary);

// router.post('/sign-up', controller.posDatalogin);

// post params formulary register
router.post('/signUp', signUp);

// post params formulary login
router.post('/signIn', signIn);

// update info students
router.put('/update-students/:id', controller.updateInfoStudents);

//route for delete info students
router.delete('/delete-students/:id', controller.deleteStudents);

module.exports = router;