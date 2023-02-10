const { DataTypes } = require('sequelize');
const { db } = require("../config/db")

const Urbanizacion = db.define("urbanizacion", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {

})


module.exports = Urbanizacion