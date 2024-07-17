const Personagem = require('./personagem');

class Heroi extends Personagem {

    forcas = [];
        
    constructor(nome) {
        super(nome);
    }
}

module.exports = Heroi;