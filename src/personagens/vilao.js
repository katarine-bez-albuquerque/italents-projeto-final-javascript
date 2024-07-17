const Personagem = require('./personagem');

class Vilao extends Personagem {    
    
    obstaculos = [];

    constructor(nome) {
        super(nome);
    }    
}

module.exports = Vilao;