const { DataTypes } = require('sequelize');
const sequelize = require('../db');


const Seller = sequelize.define('seller', {
    
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },

    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    nickname: {
        type: DataTypes.STRING,
        allowNull:false,
    },

    password:{
        type: DataTypes.STRING,
        allowNull: true,
    },

    email:{
        type: DataTypes.STRING,
        allowNull:false,
    },

});

module.exports = Seller;