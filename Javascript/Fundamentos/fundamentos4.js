function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
// console.log(rand({max: 50, min: 40}));
// const obj = { max: 50, min: 40}
// console.log(rand(obj))
// console.log(rand({}));

function rand([min = 0, max = 1000]) {
    if (min > max) [ min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
// console.log(rand([50, 40]))
// console.log(rand([992]))
// console.log(rand([, 30]))
// console.log(rand([]))

function operadores() {
    const [a ,b ,c ,d] = [2, 3, 8, 9]

    const soma = a + b + c + d
    const subtracao = d - b
    const multiplicacao = a * b
    const divisao = d / a
    const modulo = c % 2
    
    console.log(soma, subtracao, multiplicacao, divisao, modulo);
}
// operadores()

function trueOrFalse() {
    console.log('01)', '1' == 1)
    console.log('02)', '1' === 1)
    console.log('03)', '3' != 1)
    console.log('04)', '3' !== 3)

    console.log('05)', '3' < 2)
    console.log('06)', '3' > 2)
    console.log('07)', '3' >= 2)
    console.log('08)', '3' >= 2)

    const d1 = new Date(0)
    const d2 = new Date(0)
    console.log('09)', d1 == d2)
    console.log('10)', d1 == d2)
    console.log('11)', d1.getTime() === d2)

    console.log('12)', undefined == null)
    console.log('13)', undefined === null)

}
// trueOrFalse()