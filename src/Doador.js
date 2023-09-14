class Doador {
  nome;
  #cpf;
  #email;
  anonimo;

  constructor(nome, email, cpf) {
    this.nome = nome;
    this.#cpf = cpf;
    this.#email = email;
    this.anonimo = false;
  }

  get cpf() {
    return this.#cpf;
  }

  set cpf(cpf) {
    this.#cpf = cpf
  }

  get email() {
    return this.#email;
  }

  set email(email) {
    this.#email = email
  }

  tornarAnonimo() {
    this.anonimo = true;
    this.nome = "Anônimo";
  }
  
  doar(organizacao, valor) {
    if (valor <= 0) {
      throw new Error("Valor inválido");
    }

    const transacao = new Transacao(this, organizacao, valor);
    return transacao.realizarDoacao();
  }
}

module.exports = Doador;