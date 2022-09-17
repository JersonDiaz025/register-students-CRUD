const User = require('../models/users');

const verifyDuplicateUsers = async(req, res, next) => {
    const { email, username } = req.body;

    const emailUser = await User.findOne({ email: email });

    if (emailUser) return res.status(400).json({value: false, response: "The email aready exist" });

    const userName = await User.findOne({ username: username });

    if (userName) return res.status(400).json({value: false, response: "The user aready exist" });
    next();
}

module.exports = verifyDuplicateUsers;