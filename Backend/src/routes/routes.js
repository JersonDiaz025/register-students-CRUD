const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const verifyToken = require('../custom_middlewares/authJwt');
const verifyDuplicateUsers = require('../custom_middlewares/checkSignUp');

const { signIn, signUp } = require('../auth/auth')

// Home route
router.get('/', controller.getHome);

// view all info students
router.get('/all-students', controller.getAllInfoStudents);

// post params from form
router.post('/add-student-data', verifyToken, controller.postDataFormulary);

// post params formulary register
router.post('/signUp', verifyDuplicateUsers, signUp);

// post params formulary login
router.post('/signIn', signIn);

// update info students
router.put('/update-students/:id', verifyToken, controller.updateInfoStudents);

//route for delete info students
router.delete('/delete-students/:id', verifyToken, controller.deleteStudents);

module.exports = router;