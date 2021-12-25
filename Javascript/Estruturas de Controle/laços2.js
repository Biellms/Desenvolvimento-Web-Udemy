function while1() {

    function getInteiroAleatorioEntre(min, max) {
        const valor = Math.random() * (max - min) + min
        return Math.floor(valor)
    }

    let op = 0

    while (op != -1) {
        op = getInteiroAleatorioEntre(-1, 10)

        console.log(`Opção escolhida foi ${op}.`);
    }

    console.log('Flwwwww');

}
// while1()

function dowhile1() {

    function getInteiroAleatorioEntre(min, max) {
        const valor = Math.random() * (max - min) + min
        return Math.floor(valor)
    }

    let op = -1

    do {
        op = getInteiroAleatorioEntre(-1, 10)
        console.log(`Opção escolhida foi ${op}.`);

    } while (op != -1)

    console.log('Flwwwww');

}
// dowhile1()

function for1() {
    for (let i = 0; i < 10; i++) {
        console.log(`i = ${i}`);
    }
}
// for1()

function for2() {
    const notas = [6.6, 7.7, 8.8, 9.9, 10]

    for (let i = 0; i < notas.length; i++) {
        console.log(`nota ${i + 1} = ${notas[i]}`);
    }
}
// for2()