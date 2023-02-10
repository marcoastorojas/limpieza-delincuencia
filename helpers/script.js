// const data = [
//     {nombre:"Limpieza"},
//     {nombre:"Delincuencia"}
// ]

// Categoria.bulkCreate(data).then(() => {
//     console.log('Registros agregados con éxito');
// });

// const data = [{nombre:"Suciedad",categoriaId:1},
// {nombre:"Mal estado",categoriaId:1},
// {nombre:"Falta de depósitos de basura",categoriaId:1},
// {nombre:"Mal vecino",categoriaId:1},
// {nombre:"robos",categoriaId:2},
// {nombre:"hurtos",categoriaId:2},
// {nombre:"enfrentamientos",categoriaId:2},
// {nombre:"vandalismo",categoriaId:2}]

// Subcategoria.bulkCreate(data).then(() => {
//     console.log('Registros agregados con éxito');
//   });




// const info = ["Cercado", "Alto Selva Alegre", "Cayma", "Cerro Colorado", "Characato", "Chiguata", "Jacobo Hunter", "La Joya", "Mariano Melgar", "Miguel Grau", "Paucarbamba", "Pueblo Libre", "San Juan de Siguas", "San Miguel", "Santa Isabel de Siguas", "Santa Rita de Siguas", "Tiabaya", "Yanahuara", "Yareta"]

// const distritos = info.map(distrito=>{
//     return {nombre:distrito,provinciaId:1,extension:Math.ceil(Math.random()*3000)}
// })
// Pais.create({nombre:"Perú"})
//     .then(data=>{
//         Departamento.create({nombre:"Arequipa",paisId:1})
//             .then(data=>{
//                 Provincia.create({nombre:"Arequipa",departamentoId:1})
//                     .then(data=>{
//                         Distrito.bulkCreate(distritos)
//                             .then(data=>{
//                               const urbanizaciones = []
//                               info.forEach((distrito,i)=>{
//                                 ["A","B","C","D"].forEach(nombreUrbanizacion=>{
//                                   urbanizaciones.push({nombre:`${distrito} zona ${nombreUrbanizacion}`,distritoId:i+1})
//                                 })
//                               })
//                               Urbanizacion.bulkCreate(urbanizaciones)
//                                 .then(data=>console.log("urbanizaciones creadas"))
//                              })
//                     })
//             })
//     })





// const data = [];

// for (let i = 0; i < 3000000; i++) {
//   data.push({
//     comentario: chance.paragraph({ sentences: 1 }).slice(0, 37),
//     calificacion: Math.ceil(Math.random() * 10),
//     categoriaId: Math.ceil(Math.random() * 2),
//     subcategoriaId: Math.ceil(Math.random() * 4),
//     denuncianteId: Math.ceil(Math.random()*100000),
//     fechaId: Math.ceil(Math.ceil(Math.random()*8440)),
//     urbanizacionId: Math.ceil(Math.ceil(Math.random()*76))
//   })
// }

// async function createDenunciasInBatches(data) {
//   const batchSize = 1000;
//   for (let i = 0; i < data.length; i += batchSize) {
//     const batch = data.slice(i, i + batchSize);
//     await Denuncia.bulkCreate(batch, { include: [Denunciante] });
//   }
// }

// createDenunciasInBatches(data)
//   .then(() => console.log("todo creado"))
//   .catch(error => console.error("Error al crear denuncias:", error));






// const data = [];

// for (let i = 0; i < 20000; i++) {
//   data.push({
//     nombre: chance.name(),
//     apellido: chance.last(),
//     edad: chance.age(),
//     longitud: chance.floating({ min: 10, max: 200, fixed: 4 }),
//     latitud: chance.floating({ min: 10, max: 200, fixed: 4 }),
//   })
// }

// Denunciante.bulkCreate(data)
//   .then(() => {
//     console.log("todo creado")
//     Denunciante.count().then(console.log)
// })
//   .catch(error => console.error("Error al crear denuncias:", error));



// let start = new Date("2000-01-01");
// let end = new Date();

// const dates = []
// while (start < end) {
//   let current = new Date(start);
//   dates.push({ fecha: current });
//   start.setDate(start.getDate() + 1);
// }
// Fecha.bulkCreate(dates)
//   .then(d => { console.log("todo subido") })

