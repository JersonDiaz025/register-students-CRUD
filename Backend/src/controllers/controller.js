const RegisterStudents = require('../models/register-students');
const controller = {};


// controller route home
controller.getHome = (req, res) => {
    res.send('Hello word');
}

// controller getAllstudents
controller.getAllInfoStudents = async (req, res) => {
    try {
        await RegisterStudents.find()
        .then(data => {
            res.json({response: "success", data});
        });
    } catch (err) {
        console.log(err);
        res.json({response: 'Error internal server'})
    }
}

// received dates from client
controller.postDataFormulary = async (req, res) => {

    const { calification, direction, email, name, phone_number, asignatura } = req.body;

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
}

// update info students
controller.updateInfoStudents = async (req, res) => {
    const { id } = req.params;
    const { calification, direction, email, name, phone_number, asignatura } = req.body;
    // console.log(calification)

    await RegisterStudents.findByIdAndUpdate({_id: id}, {'$set': {
        calification: calification,
        direction: direction,
        email: email,
        name: name,
        phone_number: phone_number,
        asignatura: asignatura,
    }});
}


// delete info students
controller.deleteStudents = async (req, res) => {
    const id = req.params.id;
    try {
        await RegisterStudents.findByIdAndDelete({_id: id})
        // res.json(`usuario con el ${id} eliminado`)
    } catch (err) {
        console.log(err)
    }
}

module.exports = controller;