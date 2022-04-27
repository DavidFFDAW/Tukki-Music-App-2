const Mix = require("../models/Mix");

const getUserMixes = async (req, res) => {
    const { id } = req.user;

    const thisUserMixes = await Mix.findAll({
        where: {
            user_id: id
        }
    });

    res.status(200).json({ mixes: thisUserMixes });
}

const MixesController = {
    getUserMixes
}

module.exports = {
    MixesController
}