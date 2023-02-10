const { DataTypes } = require('sequelize');
const { db } = require("../config/db");
const Provincia = require('./Provincia');

const Departamento = db.define("departamento", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {

})

Departamento.hasMany(Provincia, { foreignKey:'departamentoId' } );
Provincia.belongsTo(Departamento, { foreignKey:'departamentoId' } );

module.exports = Departamento