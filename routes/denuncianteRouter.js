const { Router } = require("express")
const { postDenunciante } = require("../controllers/denuncianteController")
const denuncianteRouter = Router()
// const {param} =require("express-validator")


denuncianteRouter.post("/",postDenunciante)


module.exports = denuncianteRouter