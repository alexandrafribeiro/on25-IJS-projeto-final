const Doador = require('./Doador');
const Organizacao = require('./Organizacao.js');
const Transacao = require('./Transacao');

describe('Teste Doador', () => {
    let doador;
    beforeEach(() => {
        doador = new Doador('Alexandra', 'ale@gmail.com', '123.456.789-00');
    });

    it('Deve criar instância de Doador', () => {
        expect(doador.nome).toBe('Alexandra');
        expect(doador.email).toBe('ale@gmail.com');
        expect(doador.cpf).toBe('123.456.789-00');
        expect(doador.anonimo).toBe(false);
      });

    it('Deve tornar o doador anônimo', ()=> {
        doador.tornarAnonimo();
        expect(doador.nome).toBe('Anônimo');
        expect(doador.anonimo).toBe(true);
    })

    it("Deve lançar um erro se o valor da doação for igual a zero", () => {
        expect(() => {
          doador.doar("ONG A", 0);
        }).toThrow("Valor inválido");
      });
    
    it("Deve lançar um erro se o valor da doação for negativo", () => {
       expect(() => {
         doador.doar("ONG A", -10);
       }).toThrow("Valor inválido");
    });
    
    it("Deve realizar a doação com sucesso se o valor for válido", () => {
      const organizacao = new Organizacao("ONG A");
      const transacao = new Transacao(doador, organizacao, 100);
      const resultado = transacao.realizarDoacao();

      expect(resultado).toEqual({
          doador: "Alexandra",
          organizacao: "ONG A",
          valor: 100
      });
      expect(organizacao.totalDoacoes).toBe(100);
    });
});