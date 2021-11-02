const { DataTypes } = require('sequelize');
const sequelize = require('../db');


const Quotation = sequelize.define('quotation', {
    
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },

    // date:{
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },

    total:{
        type: DataTypes.DECIMAL,
        allowNull: false,
    }

});

module.exports = Quotation;