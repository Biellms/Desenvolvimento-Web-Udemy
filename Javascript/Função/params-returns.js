function area(x, y) {
    const area = x * y

    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}
console.log(area(10, 5));

function soma() {
    let soma = 0

    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log(soma(2, 3, 5, 6));