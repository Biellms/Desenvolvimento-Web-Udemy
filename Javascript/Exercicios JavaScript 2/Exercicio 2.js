/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
números de strings.*/

function maiorOuIgual(primeiro, segundo) {

    if (typeof primeiro != typeof segundo)  { return `A declaração '${primeiro}', não é igual ao tipo de declaração '${segundo}'` }

    if (primeiro > segundo ) {
        return `O ${primeiro} é maior que o ${segundo}`
    }

    if (primeiro < segundo ) {
        return `O ${primeiro} é menor que o ${segundo}`
    }

    if (primeiro == segundo ) {
        return `O ${primeiro} é igual ao ${segundo}`
    }   
}
console.log(maiorOuIgual(12, 'g'));
