// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.preDesc = preco * (1 - desc)
    this.getPrecoComDesconto = () => {
        return `R$${this.preDesc.toFixed(2)}`
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.nome,p1.getPrecoComDesconto(),'\n'
    +p2.nome,p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return `R$${(salarioBase / 30) * (30 - faltas)}`
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.nome,f1.getSalario(),'\n'
    +f2.nome,f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Um função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)