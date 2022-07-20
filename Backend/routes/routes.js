const express = require('express');
const router = express.Router();
// const Todo = require('../models/todo');
const RegisterStudents = require('../models/register-students');

router.get('/', (req, res) => {
    res.send('klk con klk')
});

// view all info students
router.get('/AllStudents', (req, res) => {
    RegisterStudents.find()
    .then(data => {
        res.json({response: "success", data});
    })
})

// get params from form
router.post('/add-student-data', async (req, res) => {

    const calification = req.body.calification;
    const direction = req.body.direction;
    const email = req.body.email;
    const name = req.body.name;
    const phone_number = req.body.phone_number;
    const asignatura = req.body.asignatura;

    const students = new RegisterStudents({
        calification: calification,
        direction: direction,
        email: email,
        name: name,
        phone_number: phone_number,
        asignatura: asignatura,
    });
    try {
        await students.save();
    } catch (err) {
        console.log(err);
    }

});

module.exports = router;