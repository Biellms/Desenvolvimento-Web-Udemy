const funcionario = {nome: 'Maria', salario: 2900.99}
const clone = { ativo: true, ...funcionario}
console.log(clone);

const grupoA = ['Calleri', 'Gabriel', 'Luciano']
const grupoFinal = ['Nestor', ...grupoA, 'Pablo Maia']
console.log(grupoFinal);