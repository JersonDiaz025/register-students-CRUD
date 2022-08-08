const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UsersLogin = new mongoose.Schema(
    {
        email: String,
        password: String,
    }
);

// encrypt password

UsersLogin.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

// compare password
UsersLogin.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password);

}

module.exports = mongoose.model("LoginUsers", UsersLogin);