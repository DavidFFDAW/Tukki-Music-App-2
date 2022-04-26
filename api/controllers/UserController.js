const User = require("../models/User");
const { generateAccessToken } = require("../services/jwt/jwt.service");
const bcrypt = require("bcryptjs");

const attemptLogIn = async (req, res) => {
    // console.log(req.body);
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({
            message: "Email and password are required",
        });
    }

    const user = { name: req.body.name, email: req.body.email };
    const foundUser = await User.findOne({ where: { email: user.email } });
    // console.log(foundUser);

    if (!foundUser) {
        return res.status(401).json({
            message: "User not found",
        });
    }

    const isValidPassword = bcrypt.compareSync(req.body.password, foundUser.password);
    // console.log(bcrypt.hashSync(req.body.password, 10));
    // console.log(foundUser.password);
    // console.log(isValidPassword);

    if (!isValidPassword) {
        return res.status(403).json({
            message: "Invalid password",
        });
    }

    const generatedJWT = generateAccessToken(user);
    // console.log(generatedJWT);
    return res.status(200).json({ token: generatedJWT });
}


module.exports = {
    attemptLogIn
}