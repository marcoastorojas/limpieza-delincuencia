const chance = require("chance").Chance()
const { request, response } = require("express");
const Denuncia = require("../models/Denuncia");
const Denunciante = require("../models/Denunciante");

const getDenunciante = async (req = request, res = response) => {
    const { nombre, edad } = req.body
    const denunciante = await Denunciante.findOne({ where: { nombre, edad }, include: [{ model: Denuncia }] })
    res.json({ ok: true, data: denunciante })
}

const postDenunciante = async (req = request, res = response) => {
    const {
        nombre,
        apellido,
        edad,
        latitud = chance.floating({ min: 10, max: 200, fixed: 4 }),
        longitud = chance.floating({ min: 10, max: 200, fixed: 4 }) } = req.body
    try {
        const newDenunciante = await Denunciante.create({
            nombre,
            apellido,
            edad,
            latitud,
            longitud
        })
        res.status(201).json({ ok: true, newDenunciante })
    } catch (error) {   
        res.status(500).json({ error: error.message })
    }
}


module.exports = {
    postDenunciante,
    getDenunciante
}