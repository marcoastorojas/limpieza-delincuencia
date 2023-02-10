const { DataTypes } = require('sequelize');
const { db } = require("../config/db");
const Denuncia = require('./Denuncia');


const Fecha = db.define("fecha", {
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {

})

Fecha.hasMany(Denuncia, { foreignKey: "fechaId" })
Denuncia.belongsTo(Fecha, { foreignKey: "fechaId" })







module.exports = Fecha