const contadorA = require('./instanciaComCache')
const contadorB = require('./instanciaComCache')

const contadorC = require('./instanciaSemCache')()
const contadorD = require('./instanciaSemCache')()

contadorA.inc()
contadorA.inc()
contadorA.dec()
console.log(contadorA.valor, contadorB.valor) // Cache

contadorC.inc()
contadorA.inc()
contadorC.dec()
console.log(contadorC.valor, contadorD.valor) // Sem cache