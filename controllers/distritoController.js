const { request, response } = require("express");
const Distrito = require("../models/Distrito");




const getDistritosPorProvincia = async (req = request, res = response) => {
    const { provinciaId = 1 } = req.body
    const distritos = await Distrito.findAll({ where: { provinciaId } })
    res.json({ ok: true, data: distritos })
}

const postDistrito = async (req = request, res = response) => {
    const { provinciaId, nombre, extension } = req.body
    try {
        const newDistrito = await Distrito.create({
            provinciaId,
            nombre,
            extension
        })
        res.status(201).json({ ok: true, newDistrito })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = {
    getDistritosPorProvincia,
    postDistrito
}