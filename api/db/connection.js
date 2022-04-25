const { Sequelize } = require('sequelize');
require('dotenv').config();

const config = {
    host: `${ process.env.DB_HOST }`,
    database: `${ process.env.DB_NAME }`,
    username: `${ process.env.DB_USER }`,
    password: `${ process.env.DB_PASS }`,
}

module.exports = {
    conn: new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        dialect: 'mysql',
    }),
    defaultTableConfiguration: {
        timestamps: true,
        freezeTableName: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
}