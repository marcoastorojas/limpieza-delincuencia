const { Router } = require("express")
const { postUrbanizacion, getUrbanizacionByDistrito } = require("../controllers/urbanizacionController")
const urbanizacionRouter = Router()
// const {param} =require("express-validator")


urbanizacionRouter.get("/",getUrbanizacionByDistrito)
urbanizacionRouter.post("/",postUrbanizacion)


module.exports = urbanizacionRouter