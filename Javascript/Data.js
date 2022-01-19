const diaDaSemana = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
];

const mes = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
];

const today = new Date();

const date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear()

console.log(date);

const data = new Date()

console.log(data);
console.log(data.toDateString());
console.log(data.toUTCString());

console.log(`Hoje é ${diaDaSemana[data.getDay()]} - ${dataFormatada()}`);

// data formatada
function dataFormatada(data = new Date()) {
    let dia = data.getDate()
    let mes = data.getMonth()+1
    let ano = data.getFullYear()

    if (dia.toString().length == 1) { dia = '0' + dia }
    if (mes.toString().length == 1) { mes = '0' + mes }

    return dia+'/'+mes+'/'+ano
}
console.log('Data formatada - '+dataFormatada());
