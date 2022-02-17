const moduloA = require('../../moduloA')
console.log(moduloA.bemVindo);

const c = require('./pastaC/index') // Não é necessário colocar o path 'index', pois o index já é um valor padrão
console.log(c.ola2)

const http = require('http')

http.createServer((req, res) => {
    res.write('Primeiro Hello world com nodeJS!!\n')
    res.write(c.ola2)
    res.end()
}).listen(8080)