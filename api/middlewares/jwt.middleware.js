const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateTokenJWT = (req, res, next) => {
    const authHeader = req.headers['authorization'] || ''; // Bearer <token>
    const [type, token] = authHeader.split(' '); // <token>

    if (!token || type.trim() !== 'Bearer') return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        console.log(err);

        if (err) return res.sendStatus(403);

        req.user = user;

        next();
    })
};

module.exports = {
    authenticateTokenJWT
};