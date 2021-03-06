const { conn, defaultTableConfiguration } = require('../db/connection');
const { DataTypes } = require('sequelize');
const User = require('./User');


const Song = conn.define('songs', {
    'id': {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    'name': {
        type: DataTypes.STRING,   
    },
    'artist': {
        type: DataTypes.STRING,
    },
    'url': {
        type: DataTypes.STRING,
    },
    'duration': {
        type: DataTypes.BOOLEAN,
    },
    'artist_id': {
        type: DataTypes.INTEGER,
    },
    'created_at': {
        type: DataTypes.DATE,
    },
    'updated_at': {
        type: DataTypes.DATE,
    },
}, defaultTableConfiguration);


User.hasMany(Song, { foreignKey: 'artist_id' });

module.exports = Song;