const { Router } = require("express")
const { getDenunciasAĆ±oDistrito, getDenunciaPorUsuario, postDenuncia } = require("../controllers/denunciaController")
const denunciaRouter = Router()
// const {param} =require("express-validator")


denunciaRouter.post("/year-district", getDenunciasAĆ±oDistrito)
denunciaRouter.get("/by-user", getDenunciaPorUsuario)
denunciaRouter.post("/",postDenuncia)


module.exports = denunciaRouter