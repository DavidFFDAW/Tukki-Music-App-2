const Song = require("../models/Song");

const getSongs = async (req, res) => {
    const { id } = req.user;

    const userSongs = await Song.findAll();
    // console.log(userSongs);

    res.status(200).json({ songs: userSongs });
}

const SongController = {
    getSongs: getSongs
}

module.exports = {
    SongController
}