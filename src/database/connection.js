// Config
const { DB } = require("../config.json");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(DB.DATABASE, DB.USERNAME, DB.PASSWORD, {
    host: DB.HOST,
    dialect: 'mysql'
});

module.exports = sequelize;