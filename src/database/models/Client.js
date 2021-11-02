const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Client = sequelize.define('client', {

    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },

    cedula:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },

    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    country:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    city:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    address:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    phone:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Client;