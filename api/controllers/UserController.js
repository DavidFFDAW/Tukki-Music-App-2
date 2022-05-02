const User = require("../models/User");
const { generateAccessToken } = require("../services/jwt/jwt.service");
const bcrypt = require("bcryptjs");
const { MailerService } = require("../services/mail.service");


const attemptLogIn = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({
            message: "Email and password are required",
        });
    }

    const user = { name: req.body.name, email: req.body.email };
    const foundUser = await User.findOne({ where: { email: user.email } });
    user.id = foundUser.id;

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
    const mail = new MailerService();

    mail.sendEmail('davidferflo2@gmail.com', 'Test', 'Test');

    return res.status(200).send({
        message: "Test successful",
        user: req.user
    });
}

const attempRegistration = async (req, res) => {
    const requiredFields = ["name", "email", "password", "repeatPassword"];
    const bodyKeys = Object.keys(req.body);

    const isEveryField = bodyKeys.every((key) => requiredFields.includes(key));

    if (!isEveryField) {
        return res.status(400).send({
            message: "Required fields are missing",
        });
    }

    const searchedUserByEmail = await User.findOne({ where: { email: req.body.email } });

    if (searchedUserByEmail) {
        return res.status(400).send({
            message: "User already exists",
        });
    }

    const isValidPassword = bcrypt.compareSync(req.body.password, req.body.repeatPassword);
    const encryptedPassword = bcrypt.hashSync(req.body.password, 10);

    if (!isValidPassword) {
        return res.status(400).send({
            message: "Passwords don't match",
        });
    }

    const created = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: encryptedPassword,

    });

    if (!created) {
        return res.status(500).send({
            message: "Error creating user",
        });
    }

    return res.status(201).send({ error: false, message: "User created successfully" });
}


module.exports = {
    attemptLogIn,
    attempRegistration,
    test
}