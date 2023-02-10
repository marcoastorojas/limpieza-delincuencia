const { DataTypes } = require('sequelize');
const { db } = require("../config/db");
const Distrito = require('./Distrito');

const Provincia = db.define("provincia", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {

})

Provincia.hasMany(Distrito, {foreignKey:'provinciaId'});
Distrito.belongsTo(Provincia, {foreignKey:'provinciaId'});

module.exports = Provincia