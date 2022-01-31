function somaMes(quantMes) {
    
    let soma = 0;

    for (let i = 1; i <= quantMes; i++) { 
        soma += i 
    }

    return `Com ${quantMes} meses você ganha R$${soma} reais`
}
console.log(somaMes(12));
