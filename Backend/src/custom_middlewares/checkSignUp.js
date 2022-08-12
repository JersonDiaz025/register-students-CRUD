const User = require('../models/users');

const verifyDuplicateUsers = async(req, res, next) => {
    const { email } = req.body;

    const emailUser = await User.findOne({ email: email });

    if (emailUser) return res.status(400).json({ message: "User aready exist" });
    next();
}

module.exports = verifyDuplicateUsers;