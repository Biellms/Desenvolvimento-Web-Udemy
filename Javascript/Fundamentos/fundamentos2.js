function strings() {
    
    let escola = "G4br1el"

    for (let i = 0; i < escola.length; i++) {
        console.log(" O "+(i+1)+"º char é o:",escola.charAt(i)+" | Unicode:",escola.charCodeAt(i))
    }
    console.log(" A string "+escola+", possui "+escola.length+" caracteres")

    console.log("",escola.replace(1, 'i'))
}
// strings()

function array() {
    
    const valores = [7.5, 6.9, 10, 5.2]
    console.log("",valores)
    console.log("",valores[1], valores[3])
    console.log(" O array possui",valores.length,"valores")
    delete valores[3]
    console.log("",valores)

}
// array()

function object() {
    
    const ob1 = {}
    ob1.nome = 'Coisas ilicitas'
    ob1.preco = 10.99

    console.log(ob1)

    const ob2 = {
        nome: 'Coisas legais',
        preco: 39.99
    }

    console.log(ob2)
}
// object()

function printCalculos(a,b) {
    console.log("Valor soma:",a + b)
    console.log("Valor subtração:",a - b)
    console.log("Valor divisão:",a / b)
    console.log("Valor multiplicação:",a * b)
}
// printCalculos(30,20)
