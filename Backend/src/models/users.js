const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

const UsersRegister = new Schema(
    {
        email: String,
        password: String,
    }
);

// encrypt password
UsersRegister.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};


// compare password
UsersRegister.methods.validatePassword = async (password) => {
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model("auth-users", UsersRegister);