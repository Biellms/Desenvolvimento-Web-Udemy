// Diferenças de Let e Var em Laços de Repetições

function loopVar() {
    for (var i = 0; i < 10; i++) {
        console.log(i)
    }
    console.log(i)
}
// LoopVar()

function loopLet() {
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
}
// loopLet()

function pushVar() {
    const funcs = []

    for (var i = 0; i < 10; i++) {
        funcs.push(function () {
            console.log(i);
        })  
    }
    funcs[2]()
    funcs[8]()
}
// pushVar()

function pushLet() {
    const funcs = []

    for (let i = 0; i < 10; i++) {
        funcs.push(function() {
            console.log(i);
        })  
    }
    funcs[2]()
    funcs[8]()
    funcs[5]()
}
// pushLet()