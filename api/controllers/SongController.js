const SongController = {
    getSongs: (req, res) => { 
        res.status(200).json({ songs: ['song'] });
    },
}

module.exports = {
    SongController
}