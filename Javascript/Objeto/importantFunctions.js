const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log('Keys:',Object.keys(pessoa))
console.log('Values:',Object.values(pessoa))
console.log('Keys + Values:',Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234 // Não vai alterar o valor pois foi Freezado
console.log(obj)