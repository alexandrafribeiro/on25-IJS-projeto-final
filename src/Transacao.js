const Doador = require('./Doador.js');

class Transacao extends Doador {
  constructor(doador, organizacao, valor) {
    super(doador.nome, doador.email, doador.cpf)
    this.doador = doador;
    this.organizacao = organizacao;
    this.valor = valor;
  }
  
  realizarDoacao() {
    this.organizacao.receberDoacao(this.valor);
    
    return {
      doador: this.doador.nome,
      organizacao: this.organizacao.nome,
      valor: this.valor,
    };
  }
}

module.exports = Transacao;