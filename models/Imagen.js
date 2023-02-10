const { DataTypes } = require('sequelize');
const { db } = require("../config/db")

const Imagen = db.define("imagen", {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {

})


module.exports = Imagen