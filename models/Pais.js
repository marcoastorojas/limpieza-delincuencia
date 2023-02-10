const { DataTypes } = require('sequelize');
const { db } = require("../config/db");
const Departamento = require('./Departamento');

const Pais = db.define("Pais", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {

})

Pais.hasMany(Departamento, {foreignKey:'paisId'});
Departamento.belongsTo(Pais, {foreignKey:'paisId'});



module.exports = Pais