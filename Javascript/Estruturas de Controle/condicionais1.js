function soBoaNoticia(nota) {
    if (nota > 7) {
        console.log("A nota",nota,"é maior que sete!");
    }   
    if (nota == 10) { 
        console.log("A nota",nota,"é a nota maxima!");
     } else { console.log("A nota ",nota,"é menor que 7!"); }
}
// soBoaNoticia(10)

function entreNumeros() {

    // Retorna um boolean caso esteje entre o inicio e fim
    Number.prototype.entre = function (inicio, fim) {
        return this >= inicio && this <= fim
    }

    const print = function (nota) {
        if (nota.entre(9,10)) {
            console.log('Quadro de Honras');
        } else if (nota.entre(6,8.99)) {
            console.log('Aprovado!');
        } else if (nota.entre(4,6.99)) {
            console.log('Recuperação!');
        } else if (nota.entre(0,3.99)) {
            console.log('Reprovado!');
        } else {
            console.log('Nota Invalida!');
        } 
    }

    print(10)
}
entreNumeros()

