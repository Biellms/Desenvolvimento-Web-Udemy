function switch1() {
    const print = function (nota) {
        switch (Math.floor(nota)) {
            case 10:
            case 9: console.log('Quadro de Honras com a nota',nota,'!')
                break
            case 8: case 7:
                console.log('Aprovado com a nota',nota,'!')
                break
            case 6: case 5: case 4:
                console.log('Recuperação com a nota',nota,'!')
                break
            case 3: case 2: case 1: case 0:
                console.log('Reprovado com a nota',nota,'!');
                break
            default: 
                console.log('Nota Invalida')
                break
        }
    }
    print(1)
}
switch1()
