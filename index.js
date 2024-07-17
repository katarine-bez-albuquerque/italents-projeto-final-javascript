const prompt = require('prompt-sync')();
const Vilao = require('./src/personagens/vilao');
const Heroi = require('./src/personagens/heroi');
const acoes = require('./src/fases/acoes');

function nomeDaAplicacao() {
    console.log("\nPrograma Batalha da Sobrevivência:");
}

function apresentacao() {
    console.log("\nCaso o Vilão não consiga fazer a atividade selecionada pelo usuário, ele passará 30 pontos para o Herói.");
    console.log("Foi realizado cálculo da força do Herói e do Vilão, sendo feita a comparação no final.");
    console.log("Se a Força do Herói for maior, ele vence; senão o vilão vence.");
    console.log("Caso haja empate o usuário será informado; \ne se o empate for igual à zero, o usuário será informado que não houve pontuação.\n");
}

// Tutorial
function tutorial() {
    console.log("Tutorial:\n");
    console.log("1-Informar o nome do Herói;");
    console.log("2-Informar o nome do Vilão;");
    console.log("3-Responder algumas perguntas;");
    console.log("4-Finalizar com o Vencedor.\n");
}

// Validar entrada de texto
function validarTexto(texto) {
    let regex = /[a-zA-Z]/; // Testa se é somente texto.
    if (typeof (texto) !== 'string') {
        throw new Error(`Informe um nome!\n`);
    }
    if (!texto) {
        throw new Error(`O campo não pode ser vazio!\n`);
    }
    if (!regex.test(texto)) {
        throw new Error(`O campo aceita somente um nome!\n`);
    }
}

// Validar entrada de dado numérico
function validarNumero(numero) {
    if (typeof (numero) !== 'number') {
        throw new Error("Informe somente um número!");
    }
    if (!numero) {
        throw new Error("Diferente de número! Informe um número.");
    }
    if (numero <= 0) {
        throw new Error("Informe número maior que Zero!");
    }
    if (Number.isNaN(numero)) {
        throw new Error("Informe um número válido!");
    }
}

// Nome do Herói
function getNomeHeroi() {
    let heroi = prompt("Informe o nome do Herói: ");
    validarTexto(heroi);
    return heroi.toString().toUpperCase();
}

// Nome do Vilão
function getNomeVilao() {
    let vilao = prompt("Informe o nome do Vilão: ");
    validarTexto(vilao);
    return vilao.toString().toUpperCase();
}

function calcularForcaDoHeroi(heroi) {
    let soma = 0;
    for (let i = 0; i < heroi.forcas.length; i++) {
        soma += heroi.forcas[i];
    }
    return soma;
}

function calcularObstaculosVilao(vilao) {
    let soma = 0;
    for (let i = 0; i < vilao.obstaculos.length; i++) {
        soma += vilao.obstaculos[i];
    }
    return soma;
}

// Vence o que obter mais pontos
function vencedor(heroi, vilao) {
    let totalHeroi = calcularForcaDoHeroi(heroi);    
    let totalVilao = calcularObstaculosVilao(vilao);
        
    if(totalHeroi > totalVilao) {
        console.log(`\n${heroi.nome} venceu com ${totalHeroi} pontos!`);
        console.log(`${vilao.nome} perdeu com ${totalVilao} pontos!\n`);
    }
    else if(totalHeroi === totalVilao) {
        if(totalHeroi === 0 && totalVilao === 0) {
            console.log(`\nNão houve pontuação!\n`);
        }
        else {
            console.log(`\nEmpate de ${totalHeroi} pontos do ${heroi.nome} e ${vilao.nome}!\n`);
        }        
    }
    else {
        console.log(`\n${vilao.nome} venceu com ${totalVilao} pontos!`);
        console.log(`${heroi.nome} perdeu com ${totalHeroi} pontos!\n`);
    }
}

function aplicacao() {
    console.log();    
    let heroi = new Heroi(getNomeHeroi());
    let vilao = new Vilao(getNomeVilao());
    acoes(heroi, vilao);
    vencedor(heroi, vilao);
}

function menuInicial() {
    console.log("\n[1]-Apresentação");
    console.log("[2]-Jogar");
    console.log("[3]-Sair\n");
}

function escolherOpcao() {
    menuInicial();
    let opcao = +prompt("Escolha uma opção: ");
    validarNumero(opcao);
    do {
        switch(opcao) {
            case 1: {
                apresentacao();
                tutorial();
                break;
            }
            case 2: {
                aplicacao();
                break;
            }
            case 3: {
                break;
            }
            default: {
                console.log("\nOpção incorreta! Tente novamente.\n");
            }
        }
        menuInicial();
        opcao = +prompt("Deseja continuar no Jogo? Escolha uma opção: ");
        validarNumero(opcao);
    }
    while(opcao != 3);
    console.log("\nAplicação finalizada!\n");
}

try {
    nomeDaAplicacao();
    escolherOpcao();
}
catch (erro) {
    console.log(`\n${erro.message}\n`);
}