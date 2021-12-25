function forIn1() {
    const notas = [6.6, 7.7, 8.8, 9.9, 10]

    for (let i in notas) {
        console.log(`nota ${i}: ${notas[i]}`);
    }
}
// forIn1()

function forIn2() {
    const pessoa = {
        nome: 'Gabriel',
        sobrenome: 'Mendes',
        idade: '29',
        peso: '76'
    }

    for (let i in pessoa) {
        console.log(`${i}: ${pessoa[i]}`);
    }
}
forIn2()
