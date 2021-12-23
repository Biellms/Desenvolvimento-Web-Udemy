function dados1() {

    let idade = 31;

    console.log(typeof 31);
    console.log(typeof idade);

    let estaChovendo = true;

    if (estaChovendo == true) {
        console.log(typeof idade);
        }

}
// dados1();

function calculaArea() {

    const raio = 6.9
    let area = Math.PI * Math.pow(raio, 2)

    console.log(" A area é igual a: "+area.toFixed(2)+"m²");
    console.log(" O Math é um:",typeof Math);

}
calculaArea()

function troca() {

    let a = 19, b = 91, temp;
    temp = a
    console.log(" A = "+a+" B = "+b);

    // a = b;
    // b = temp;

    [a, b] = [b, a];

    console.log(" A = "+a+" B = "+b);
}
// troca()

function tipagem() {

    let qualquer = "gabriel";
    console.log(" A variavel qualquer do valor '"+qualquer+"' é do tipo " + typeof qualquer)

}
// tipagem();

function pesoBoolean() {
    
    const peso1 = 2.9923
    const peso2 = 2.1

    console.log(" Peso 1: "+peso1+"\n Peso 2: "+peso2+"\n");

    // Number.isInteger() -> Condicional para saber se o numero é inteiro ou não
    if (Number.isInteger(peso1)) {
        console.log(" O peso 1 é um numero inteiro!");
    } else { console.log(" O peso 1 não é um numero inteiro!"); }

    if (Number.isInteger(peso2)) {
        console.log(" O peso 2 é um numero inteiro!");
    } else { console.log(" O peso 2 não é um numero inteiro!"); }

    let media = peso1+peso2/2;

    console.log(" A media dos pesos é: "+media)
    console.log(" A media dos pesos é: "+media.toFixed(2)) // Modifica a quantidade de casas decimais

}
// pesoBoolean();