const RegisterStudents = require('../models/register-students');
const controller = {};

// controller route home
controller.getHome = (req, res) => {
    res.send('Hello word');
}

// controller getAllstudents
controller.getAllInfoStudents = async (req, res) => {
    try {
        const data = await RegisterStudents.find();
        res.json({ response: "success", data });

    } catch (err) {
        console.log(err);
        res.json({ response: 'Error internal server' })
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
        res.status(200).json({ success: true, response: 'Student saved successfully' })
    } catch (err) {
        console.log(err);
    }
}

// controller.getSignUp = async (req, res, next) => {
//     res.send('Register')
// }

// send data login users
// controller.register = (signUp);

// controller.posDatalogin = async (req, res) => {
//     const { email, password } = req.body;

//     const users = new UsersRegister({
//         email,
//         password
//     })
//     await users.save()
//     res.json({ response: 'Successfully saved' })
//     // .then(data=>console.log(data))

// }


// update info students
controller.updateInfoStudents = async (req, res) => {
    const { id } = req.params;
    const { calification, direction, email, name, phone_number, asignatura } = req.body;
    try {

        await RegisterStudents.findByIdAndUpdate({ _id: id }, {
            $set: {
                calification: calification,
                direction: direction,
                email: email,
                name: name,
                phone_number: phone_number,
                asignatura: asignatura,
            }
        });
        res.json({ success: true, response: 'Successfully updated student'})
    } catch (err) {
        console.log(err)
    }
}


// delete info students
controller.deleteStudents = async (req, res) => {
    const id = req.params.id;
    try {
        await RegisterStudents.findByIdAndDelete({ _id: id })
        res.json({ success: true, response:"User deleted successfully"})
    } catch (err) {
        console.log(err)
    }
}

module.exports = controller;