const { request, response } = require("express");
const Urbanizacion = require("../models/Urbanizacion");




const getUrbanizacionByDistrito = async (req = request, res = response) => {
    const { distritoId  } = req.body
    const distritos = await Urbanizacion.findAll({ where: { distritoId } })
    res.json({ ok: true, data: distritos })
}

const postUrbanizacion = async (req = request, res = response) => {
    const { distritoId, nombre } = req.body
    try {
        const newUrbanizacion = await Urbanizacion.create({
            distritoId,
            nombre
        })
        res.status(201).json({ ok: true, newUrbanizacion })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = {
    getUrbanizacionByDistrito,
    postUrbanizacion
}