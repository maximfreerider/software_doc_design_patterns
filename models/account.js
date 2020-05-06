const Sequelize = require("sequelize");
const {DataTypes} = Sequelize;

const sequelize = require('../config/db');

const Account = sequelize.define("account", {
    username: {
        type: DataTypes.STRING,
        unique: true
    },
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    money: {
        type: DataTypes.INTEGER
    },
    number_of_card: {
        type: DataTypes.STRING
    }
});

module.exports = Account;