const { Router } = require("express")
const { postDistrito, getDistritosPorProvincia } = require("../controllers/distritoController")

const distritoRouter = Router()
// const {param} =require("express-validator")

distritoRouter.get("/",getDistritosPorProvincia)
distritoRouter.post("/",postDistrito)


module.exports = distritoRouter