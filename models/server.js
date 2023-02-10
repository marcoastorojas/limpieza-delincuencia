const express = require("express")
const cors = require("cors")
const { Router } = require("express")
const { connectPostgres } = require("../config/db")
const denunciaRouter = require("../routes/denunciaRouter")
const denuncianteRouter = require("../routes/denuncianteRouter")
const distritoRouter = require("../routes/distritoRouter")
const urbanizacionRouter = require("../routes/urbanizacionRouter")
const path = require("path")

class Server {

    constructor() {
        this.PORT = 3000
        this.app = express()
        this.middlewares()
    }
    
    async listen() {
        try {
            await connectPostgres
            this.app.listen(this.PORT, () => {
                console.log(`servidor corriendo en el puerto ${this.PORT}`)
            })
        } catch (error) {
            console.log(error)
        }
        
    }
    
    middlewares() {
        this.app.use(express.static("public"))
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use("/api",this.routes())
        this.app.get("*", (req, res) => {
            res.sendFile(path.resolve(__dirname, "../public/index.html"))
        })
    }
    routes() {
        const router = Router()
        router.use("/denuncia", denunciaRouter)
        router.use("/denunciante", denuncianteRouter)
        router.use("/distrito", distritoRouter)
        router.use("/urbanizacion", urbanizacionRouter)
        return  router
    }

}

module.exports = Server