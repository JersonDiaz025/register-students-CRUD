const jwt = require('jsonwebtoken');
const { SECRET } = require('../../config');
const User = require('../models/users');

// function verify token for continue protect routes
module.exports = verifyToken = async(req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        // verifi token in headers
        if (!token) return res.status(403).json({ message: 'No token provided' });

        // search id user in token
        const decodedToken = jwt.verify(token, SECRET);

        // search id user in db
        const user = await User.findById(decodedToken.id, { password: 0 });

        if (!user) return res.status(404).json({ message: "user no found" });
        next();

    } catch (error) {
        return res.status(400).json({message: 'Unauthorized'})
    }
}