const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const UsersRegister = new Schema(
    {
        username: String,
        email: String,
        password: String,
    }
);

// encrypt password
UsersRegister.statics.encryptPassword = async (password) => {
    const encryptPass = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, encryptPass);
};

// compare password
UsersRegister.statics.comparePassword = async(newPassword, password) => {
    return await bcrypt.compare(newPassword, password);
}

module.exports = mongoose.model("auth-users", UsersRegister);