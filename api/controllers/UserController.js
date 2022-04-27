const User = require("../models/User");
const { generateAccessToken } = require("../services/jwt/jwt.service");
const bcrypt = require("bcryptjs");


const attemptLogIn = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({
            message: "Email and password are required",
        });
    }

    const user = { name: req.body.name, email: req.body.email };
    const foundUser = await User.findOne({ where: { email: user.email } });

    if (!foundUser) {
        return res.status(401).json({
            message: "User not found",
        });
    }

    const isValidPassword = bcrypt.compareSync(req.body.password, foundUser.password);

    if (!isValidPassword) {
        return res.status(403).json({
            message: "Invalid password",
        });
    }

    const generatedJWT = generateAccessToken(user);
    delete foundUser.password; // We don't want to send the password back to the client even if it's hashed
    
    return res.status(200).json({ user: foundUser, token: generatedJWT });
}

const test = (req, res) => { 
    return res.status(200).send({
        message: "Test successful",
        user: req.user
    });
}

module.exports = {
    attemptLogIn,
    test
}