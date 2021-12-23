
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function demo() {
console.log("\n 1) Sentenças -> Frases\n 2) Bloco -> Paragrafos")
console.log("\n Qual o proprósito disso?\n")

for (let i = 5; i > 0; i--) {
    console.log(" ",i)
    await sleep(500);
    }

    console.log("\n BOOOOMM!\n ADIVINHA??");await sleep(500);
    console.log("\n EU");await sleep(500);
    console.log(" NÃO ");await sleep(500);
    console.log(" SEI!!");await sleep(500);
    console.log(" HELLO WORLD!!")

}
demo();

