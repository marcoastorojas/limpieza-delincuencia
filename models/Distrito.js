const { DataTypes } = require('sequelize');
const { db } = require("../config/db");
const Estadistica = require('./Estadisticas');
const Urbanizacion = require('./Urbanizacion');

const Distrito = db.define("distrito", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    extension:{
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {

})

Distrito.hasMany(Urbanizacion,{ foreignKey:'distritoId' });
Urbanizacion.belongsTo(Distrito,{ foreignKey:'distritoId' });

Distrito.hasMany(Estadistica,{ foreignKey:'distritoId' });
Estadistica.belongsTo(Distrito,{ foreignKey:'distritoId' });

module.exports = Distrito