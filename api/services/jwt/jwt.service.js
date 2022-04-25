const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
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