const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');


// Home route
router.get('/', controller.getHome);

// view all info students
router.get('/all-students', controller.getAllInfoStudents);

// post params from form
router.post('/add-student-data', controller.postDataFormulary);

// update info students
router.put('/update-students/:id', controller.updateInfoStudents);

//route for delete info students
router.delete('/delete-students/:id', controller.deleteStudents);


module.exports = router;