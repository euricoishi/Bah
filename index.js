const readline = require('readline-sync')
let Nome, Idade, Assento, Voo, Origem, Destino;
var status = 0
let mapaAssentos = [];
let assentosOcupados = 0;
const TOTAL_ASSENTOS = 24;

function Exibirmenu() {
console.log('\n _ _ _ _ _ _Pasagens Aéreas_ _ _ _ _ _ _ ')
console.log('|                                       |')
console.log('|    1 - Comprar Passagem               |')
console.log('|    2 - Consultar Voos                 |')
console.log('|    3 - Mapa de Acentos                |')
console.log('|    4 - Emitir Ticket                  |')
console.log('|    0 - Encerrar programa              |')
console.log(' _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _')
}
function ComprarPassagem() {
console.log('\n _ _ _ _ _ _Pasagens Aéreas_ _ _ _ _ _ _ _ _ _ _  ')
console.log('                                           ')
console.log('  Você está em -> Comprar passagem         ')
Nome = readline.question('Nome: ');
Idade = parseInt(readline.question('Idade: '));
Assento = readline.question('Assento (ex: A1): ').toUpperCase();
Origem = readline.question('(ex: Presidente Prudente): ').toUpperCase();
Destino = readline.question('(ex: New Work): ').toUpperCase();

if (!mapaAssentos[Assento] && Assento.match(/^[AB][1-9]|1[0-2]$/)) {

mapaAssentos[Assento] = 'X';
assentosOcupados++;
    
if (Idade < 18) {
    valor = 50;
} else if (Idade >= 60) {
    valor = 100;
    } else {
    valor = 75;
    }
console.log('\n_ _ _ _ Resumo da Compra_ _ _ _');
console.log( `         Nome: ${Nome}          `);
console.log(`          Idade: ${Idade}        `);
console.log(`          Assento: ${Assento}    `);
console.log(`          Origem: ${Origem}      `);
console.log(`          Destino: ${Destino}    `);
} else {
    
 console.log('\nAssento inválido ou ocupado!');
     }
    }
console.log(' _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _')


function consultarVoos() {
console.log('\n _ _ _ _ _ _Pasagens Aéreas_ _ _ _ _ _ _ ')
console.log('|                                       |')
console.log('| Você está em -> Consulta de Voos      |')
console.log('| Origem        x                Destino|')
console.log('|_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|')
console.log('|Presidente Prudente              Dublin|')
console.log('|Presidente Prudente               Ceará|')
console.log('|Presidente Prudente           São Paulo|')
console.log('|Presidente Prudente            New Work|')
console.log(' _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _')
}
function exibirMapaAssentos() {
console.log('\n _ _ _ _ _ _Pasagens Aéreas_ _ _ _ _ _ _ ')
console.log('|                                       |')
console.log('| Você está em -> Mapa de acentos       |')
console.log('|_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|')
for (let i = 1; i <= 12; i++) {
let linhaA = `A${i}: ${mapaAssentos['A' + i] || '-'}`;
let linhaB = `B${i}: ${mapaAssentos['B' + i] || '-'}`;
console.log(`${linhaA}\t\t${linhaB}`);
}
console.log(`\nAssentos Disponíveis: ${TOTAL_ASSENTOS - assentosOcupados}`);
console.log(`Assentos Ocupados: ${assentosOcupados}`);
}
function emitirTicket() {
console.log('\n _ _ _ _ _ _Emitir Ticket_ _ _ _ _ _ _ ')
if (!Nome) {
console.log('|       Nenhuma passagem vendida!       |');
return;
}
console.log('===============================');
console.log('     Companhia Aérea Oishi     ');
console.log('===============================');
console.log(`Nome: ${nome} ${sobrenome}`);
console.log(`Idade: ${idade}`);
console.log(`Assento: ${assento}`);
console.log(`Origem: ${origem}`);
console.log(`Destino: ${destino}`);
console.log(`Valor: R$ ${valor.toFixed(2)}`);
console.log('===============================');
}
let = console.log("Exibirmenu")

do {
    Exibirmenu();
    opcao = parseInt(readline.question('opcao:'));
switch (opcao) {
    case 1:
        ComprarPassagem();
        break;
    case 2:
         consultarVoos();
         break;
    case 3:
        exibirMapaAssentos();
        break;
    case 4:
        emitirTicket();
        break;
        case 0:
    console.log('\nPrograma encerrado!');
        break;
    default:
        console.log('\nOpção inválida!');
    }
}
while (opcao !== 0);
