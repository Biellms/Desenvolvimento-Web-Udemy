const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => { // Função de comparador para pegar o menor salario
    return func.salario < funcAtual.salario ? func : funcAtual
}
const maiorSalario = (func, funcAtual) => { // Função de comparador para pegar o maior salario
    return func.salario > funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func);

    const func2 = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(maiorSalario)

    console.log(func2);
})



