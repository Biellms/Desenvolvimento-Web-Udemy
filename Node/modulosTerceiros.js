const _ = require('lodash')
setInterval(() => console.log("Número: "+_.random(1, 100)), 2000)

// Nodemon deve estar instalado: npm i -g nodemon
// Comando para execução com nodemon: nodemon modulosTerceiros.js
