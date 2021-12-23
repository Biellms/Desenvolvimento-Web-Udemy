function soBoaNoticia(nota) {
    if (nota > 7) {
        console.log("A nota",nota,"é maior que sete!");
    }   
    if (nota == 10) { 
        console.log("A nota",nota,"é a nota maxima!");
     } else { console.log("A nota ",nota,"é menor que 7!"); }
}
// soBoaNoticia(10)

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

