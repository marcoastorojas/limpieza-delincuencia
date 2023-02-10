const { Router } = require("express")
const { getDenunciasAñoDistrito, getDenunciaPorUsuario, postDenuncia } = require("../controllers/denunciaController")
const denunciaRouter = Router()
// const {param} =require("express-validator")


denunciaRouter.post("/year-district", getDenunciasAñoDistrito)
denunciaRouter.get("/by-user", getDenunciaPorUsuario)
denunciaRouter.post("/",postDenuncia)


module.exports = denunciaRouter