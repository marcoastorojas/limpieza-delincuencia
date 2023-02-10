const { DataTypes } = require('sequelize');
const { db } = require("../config/db");
const Denuncia = require('./Denuncia');

const Denunciante = db.define("denunciante", {
    nombre:{
        type: DataTypes.STRING,
        allowNull:false
    },
    apellido:{
        type: DataTypes.STRING,
        allowNull:false
    },
    edad:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    longitud:{
        type: DataTypes.DECIMAL,
        allowNull:false
    },
    latitud:{
        type: DataTypes.DECIMAL,
        allowNull:false
    }
}, {

})




module.exports = Denunciante