const { DataTypes } = require('sequelize');
const { db } = require("../config/db");
const Denunciante = require("./Denunciante");
const Subcategoria = require('./SubCategoria');
const Urbanizacion = require('./Urbanizacion');

const Denuncia = db.define("denuncia", {
    comentario: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    calificacion: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})


Subcategoria.hasMany(Denuncia, { foreignKey: 'subcategoriaId' });
Denuncia.belongsTo(Subcategoria, { foreignKey: 'subcategoriaId' });

Denunciante.hasMany(Denuncia, { foreignKey: 'denuncianteId' });
Denuncia.belongsTo(Denunciante, { foreignKey: 'denuncianteId' });


Urbanizacion.hasMany(Denuncia, { foreignKey: 'urbanizacionId' });
Denuncia.belongsTo(Urbanizacion, { foreignKey: 'urbanizacionId' });


module.exports = Denuncia