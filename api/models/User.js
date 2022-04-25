const { conn, defaultTableConfiguration } = require('../db/connection');
const { DataTypes } = require('sequelize');


const User = conn.define('users', {
    'id': {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    'name': {
        type: DataTypes.STRING,
        allowNull: true       
    },
    'email': {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    'password': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'verified': {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    'last_connection': {
        type: DataTypes.DATE,
        allowNull: true        
    },
    'type': {
        type: DataTypes.ENUM(['normal','artist','admin']),
        allowNull: true
    },
    'last_listened_to': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'petition_status': {
        type: DataTypes.ENUM(['not_started','pending','accepted']),
        allowNull: true,
    },
    'created_at': {
        type: DataTypes.DATE,
    },
    'updated_at': {
        type: DataTypes.DATE,
    },
}, defaultTableConfiguration);



module.exports = User;