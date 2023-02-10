const { DataTypes } = require('sequelize');
const { db } = require("../config/db");
const Denuncia = require('./Denuncia');
const SubCategoria = require('./SubCategoria');

const Categoria = db.define("categoria", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {

}) 
Categoria.hasMany(Denuncia, { foreignKey: 'categoriaId'});
Denuncia.belongsTo(Categoria, { foreignKey: 'categoriaId'});


Categoria.hasMany(SubCategoria, { foreignKey: 'categoriaId' });
SubCategoria.belongsTo(Categoria, { foreignKey: 'categoriaId' });



module.exports = Categoria