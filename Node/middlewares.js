// middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3) // Executa todos, pois passo 1 e 2 possuem next()
console.log(ctx)

const ctx2 = {}
exec(ctx2, passo3, passo2, passo1) // Executa apenas o passo 3, pois ele não possue next()
console.log(ctx2)