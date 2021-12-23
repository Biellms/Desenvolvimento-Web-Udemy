function anotacaoPonto() {
    const obj1 = {}

    obj1.nome = 'Bola'
    // ob1['nome'] = 'Bola2'
    console.log(obj1);

    function Obj(nome) {
        this.nome = nome
        this.exec = function() {
            console.log('Executando...');
        }
    }

    const obj2 = new Obj('Cadeira')
    const obj3 = new Obj('Mesa')
    obj3.exec()
    console.log(obj2.nome)
    console.log(obj3.nome)
}
// anotacaoPonto()

function atribuicao() {
    const a = 7
    let b = 3

    b += a
    console.log(b)

    b -= 4
    console.log(b);

    b *= 2
    console.log(b);

    b /= 2
    console.log(b);

    b %= 2
    console.log(b);
}
// atribuicao()

function destructuring() {
    const [a] = [10]
    console.log(a)
    const [n1, n3, , n5, n6 = 0] = [10, 7, 9, 8]
    console.log(n1, n3, n5, n6);
}
// destructuring()

function destructuring2() {
    const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
    console.log(nota);
}
// destructuring2()