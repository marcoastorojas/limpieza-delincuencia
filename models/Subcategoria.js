const { DataTypes } = require('sequelize');
const { db } = require("../config/db");


const Subcategoria = db.define("subcategoria", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {

})

 

module.exports = Subcategoria