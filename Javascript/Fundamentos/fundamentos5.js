function operadoresLogicos(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2)
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}
// console.log(operadoresLogicos(true, true));
// console.log(operadoresLogicos(true, false));
// console.log(operadoresLogicos(false, true));
// console.log(operadoresLogicos(false, false));

function operadoresUnitarios() {
    let num1 = 1
    let num2 = 2

    num1++
    console.log(num1)
    --num1
    console.log(num1)

    console.log(++num1 === num2--)
    console.log(num1 == num2)
}
// operadoresUnitarios()

function tryCatch() {

    function tratarErroELancar() {
        // throw new Error('...')
        // throw 10
        // throw true
        throw 'Erro na função "imprimirNomeGritado"'
    }

    function imprimirNomeGritado(obj) {
        try {
            console.log(obj.nome.toUpperCase() + '!!!');
            } catch (e) {
                tratarErroELancar(e)
         } finally {
             console.log('Final!');
         }
    }

    const obj = {name: "Roberto"}
    imprimirNomeGritado(obj)
    
}
tryCatch()