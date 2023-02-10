const { Sequelize } = require('sequelize');
const Fecha = require('../models/Fecha');


const db = new Sequelize(`postgres://postgres:password1!@prueba-2.cfqsqwla4cyj.us-east-1.rds.amazonaws.com/prueba-tecnica`, {
    logging: false,
    native: false,
});









const connectPostgres = new Promise((resolve, reject) => {
    db.sync({ force: false })
        .then(resolve)
        .catch(reject)
})
module.exports = {
    db,
    connectPostgres,
}