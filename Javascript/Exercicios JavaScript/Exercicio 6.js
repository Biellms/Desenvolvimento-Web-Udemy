function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log('Juros Simples:',jurosSimples(100, 10/100, 2));
console.log('Juros Compostos:',jurosCompostos(100, 10/100, 2).toFixed(2));
