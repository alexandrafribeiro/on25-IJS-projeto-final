const Doador = require('./Doador.js');

class Organizacao extends Doador {
  constructor(nome) {
    super(nome);
    this.totalDoacoes = 0;
  }
  
  receberDoacao(valor) {
    this.totalDoacoes += valor;
  }

  exibirTotalDoacoes() {
    return `Total de doações recebidas pela ${this.nome}: ${this.totalDoacoes}`;
  }
}

module.exports = Organizacao;