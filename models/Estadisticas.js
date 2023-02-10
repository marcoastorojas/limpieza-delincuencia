const { DataTypes } = require('sequelize');
const { db } = require("../config/db")

const Estadistica = db.define("estadistica", {
    año: {
        type: DataTypes.STRING,
        allowNull: false
    },
    centros_educativos:{
        type:DataTypes.INTEGER
    },
    hospitales:{
        type:DataTypes.INTEGER
    },
    clinicas:{
        type:DataTypes.INTEGER
    },
    comisarias:{
        type:DataTypes.INTEGER
    },
    parques:{
        type:DataTypes.INTEGER
    },
    tasa_natalidad:{
        type:DataTypes.INTEGER
    },
    nivel_educación:{
        type:DataTypes.INTEGER
    },
    calidad_alimentacion:{
        type:DataTypes.INTEGER
    },
    nivel_riqueza:{
        type:DataTypes.INTEGER
    },
    denuncias:{
        type:DataTypes.DECIMAL
    },
    promedio_calidicaciones:{
        type:DataTypes.DECIMAL
    }
}, {

})


module.exports = Estadistica