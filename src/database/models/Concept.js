const { DataTypes } = require('sequelize');
const sequelize = require('../db');


const Concept = sequelize.define('concept', {
    
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },

    origin:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    destiny:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    // weight:{
    //     type: DataTypes.DECIMAL,
    //     allowNull: false,
    // },

    // type:{
    //     type: DataTypes.STRING,
    //     allowNull:false,
    // },

    description:{
        type: DataTypes.TEXT,
        allowNull:true,
    },

    price:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    // discount:{
    //     type: DataTypes.DECIMAL,
    //     allowNull: true,
    // },
    
});

module.exports = Concept;