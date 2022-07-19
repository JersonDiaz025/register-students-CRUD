const mongoose = require('mongoose');

const registerStudentSchema = new mongoose.Schema(
    {
        calification: Number,
        direction: String,
        email: String,
        name: String,
        phone_number: String,
    }
);

module.exports = mongoose.model("RegisterStudents", registerStudentSchema);