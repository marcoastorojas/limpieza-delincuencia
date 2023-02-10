const { request, response } = require("express");
const Categoria = require("../models/Categoria");
const Denuncia = require("../models/Denuncia");
const Denunciante = require("../models/Denunciante");
const Distrito = require("../models/Distrito");
const Fecha = require("../models/Fecha");
const Urbanizacion = require("../models/Urbanizacion");
const { DataTypes, Op } = require("sequelize");



const getDenunciasAñoDistrito = async (req = request, res = response) => {
    const { distritoId, año } = req.body
    console.log(distritoId,año);
    const denuncias = await Denuncia.findAll({
        include: [
            {
                model: Urbanizacion, as: 'urbanizacion', required: true, include: [{
                    model: Distrito,
                    as: 'distrito',
                    required: true,
                    where: {
                        id: distritoId
                    }
                }]
            },
            {
                model: Fecha,
                required: true,
                where: {
                    fecha: {
                        [Op.between]: [`${año}-01-01`, `${año}-12-31`]
                    }
                }
            }
        ]
    })

    const limpieza = denuncias.filter(denuncia => denuncia.categoriaId === 1)
    const delincuencia = denuncias.filter(denuncia => denuncia.categoriaId === 2)

    const limpiezaPromedio = limpieza.reduce((acc, cur) => acc + cur.calificacion, 0)/limpieza.length
    const delincuenciaPromedio = delincuencia.reduce((acc, cur) => acc + cur.calificacion, 0)/delincuencia.length

    res.status(201).json({ok:true,limpiezaPromedio,delincuenciaPromedio,limpieza:limpieza.length,delincuencia:delincuencia.length})

}
const getDenunciaPorUsuario = async (req = request, res = response) => {
    const { userId } = req.body
    const user = await Denunciante.findByPk(userId, { include: [{ model: Denuncia }] })
    if (!user) res.status(404).json({ message: "el usuario no existe" })
    res.status(201).json({ ok: true, data: user.denuncia })
}

const postDenuncia = async (req = request, res = response) => {
    const { comentario, calificacion, categoriaId, subcategoriaId, denuncianteId } = req.body
    try {
        const newDenuncia = await Denuncia.create({
            comentario,
            calificacion,
            categoriaId,
            subcategoriaId,
            denuncianteId,
            fechaId: Date.now()
        })
        res.status(201).json({ ok: true, newDenuncia })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = {
    getDenunciasAñoDistrito,
    getDenunciaPorUsuario,
    postDenuncia
}