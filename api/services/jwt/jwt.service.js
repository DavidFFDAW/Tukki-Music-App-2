const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateAccessToken = (user) => {
    console.log(process.env.JWT_SECRET);
    return jwt.sign(
        {
            email: user.email,
            name: user.name,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '3600s',
        }
    );
}

module.exports = {
    generateAccessToken
}