const { conn, defaultTableConfiguration } = require('../db/connection');
const { DataTypes } = require('sequelize');
const User = require('./User');


const Mix = conn.define('playlists', {
    'id': {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    'name': {
        type: DataTypes.STRING(50),
    },
    'description': {
        type: DataTypes.STRING(100), // should be type TEXT
    },
    'image': {
        type: DataTypes.STRING(100),
    },
    'user_id': {
        type: DataTypes.INTEGER,
    },
    'created_at': {
        type: DataTypes.DATE,
    },
    'updated_at': {
        type: DataTypes.DATE,
    },
}, defaultTableConfiguration);

Mix.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Mix;