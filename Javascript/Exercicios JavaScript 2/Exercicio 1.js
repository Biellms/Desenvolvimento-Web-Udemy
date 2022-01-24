/* Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário
num mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é
da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído
30%, relativo a impostos. */

function salario(qtdHoras, ganhoPorHora) {
    const salarioBruto = qtdHoras * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30/100

    return `Salário igual a R$${salarioLiquido}`
}

console.log(salario(245, 60));