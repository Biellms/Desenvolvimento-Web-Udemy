// Função em JUS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1() { }

// Armazenar em um variável
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) {
    return a + b
}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Eaeee!' }
console.log(obj.falar());

// Passar função como parametro
function run(fun) {
    fun()
}
run( function () { console.log('Executando...'); })

// Uma função pode retornar/conter outra função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}
soma(19, 45)(58)