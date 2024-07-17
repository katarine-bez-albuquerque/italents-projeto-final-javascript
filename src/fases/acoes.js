const prompt = require('prompt-sync')();

const acoes = (heroi, vilao) => {
    adicionarForcaHeroi(heroi);
    adicionarObstaculoVilao(heroi, vilao);    
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

function menuForcaHeroi() {
    console.log("\n[1]-Comer Carne");
    console.log("[2]-Comer Peixe");
    console.log("[3]-Comer Fruta");
    console.log("[4]-Comer Folha");
    console.log("[5]-Sair\n");
}

function menuObstaculoVilao() {
    console.log("\n[1]-Andar pela Floresta");
    console.log("[2]-Subir Árvore");
    console.log("[3]-Nadar no Rio");
    console.log("[4]-Andar na Areia");
    console.log("[5]-Sair\n");
}

function perguntarForcaHeroi(heroi) {
    let escolha = +prompt("Qual força você quer oferecer ao Herói? ");
    validarNumero(escolha);
    let contador = 0;
    while (escolha !== 5) {
        switch (escolha) {
            case 1: {
                heroi.forcas.push(50); // pontos
                break;
            }
            case 2: {
                heroi.forcas.push(40); // pontos
                break;
            }
            case 3: {
                heroi.forcas.push(30); // pontos
                break;
            }
            case 4: {
                heroi.forcas.push(20); // pontos
                break;
            }
            case 5: {
                break;
            }
            default: {
                console.log("\nOpção incorreta! Tente novamente.\n");
            }
        }
        contador++;
        escolha = +prompt("Quer oferecer mais força ao Herói? ");
        validarNumero(escolha);
    }
    console.log("\nPerguntas finalizadas!\n");
}

function perguntarObstaculoVilao(heroi, vilao) {
    let escolha = +prompt("Qual obstáculo você quer oferecer ao Vilão? ");
    validarNumero(escolha);
    let contador = 0;
    while (escolha != 5) {
        switch (escolha) {
            case 1: {
                vilao.obstaculos.push(50); // pontos
                concluirAtividade(heroi);
                break;
            }
            case 2: {
                vilao.obstaculos.push(40); // pontos
                concluirAtividade(heroi);
                break;
            }
            case 3: {
                vilao.obstaculos.push(30); // pontos
                concluirAtividade(heroi);
                break;
            }
            case 4: {
                vilao.obstaculos.push(20); // pontos
                concluirAtividade(heroi);
                break;
            }
            case 5: {
                break;
            }
            default: {
                console.log("\nOpção incorreta! Tente novamente.\n");                
            }
        }
        contador++;
        escolha = +prompt("Quer oferecer mais obstáculos ao Vilão? ");
        validarNumero(escolha);
    }
    console.log("\nPerguntas finalizadas!\n");
}

function menuAtividadeConcluída() {
    console.log("\n[1]-Sim");
    console.log("[2]-Não\n");
}

function concluirAtividade(heroi) {
    menuAtividadeConcluída();
    let escolha = +prompt("O Vilão conseguiu fazer a atividade? ");
    validarNumero(escolha);
        switch (escolha) {
            case 1: { // Sim                
                break;
            }
            case 2: { // Não
                heroi.forcas.push(30); // pontos
                break;
            }
            default: {
                console.log("\nOpção incorreta! Tente novamente.\n");                
            }        
    }
    console.log();    
}

function adicionarForcaHeroi(heroi) {
    menuForcaHeroi();
    perguntarForcaHeroi(heroi);
}

function adicionarObstaculoVilao(heroi, vilao) {
    menuObstaculoVilao();
    perguntarObstaculoVilao(heroi, vilao);
}

module.exports = acoes;