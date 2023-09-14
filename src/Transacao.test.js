const Transacao = require('./Transacao');
const Doador = require('./Doador');
const Organizacao = require('./Organizacao');

describe('Transação', ()=> {
    it('Deve realizar doação', () => {
        const doador = new Doador('Alexandra', 'ale@example.com', '123.456.789-00');
        const organizacao = new Organizacao('ONG A');
        const transacao = new Transacao(doador, organizacao, 100);
        const resultado = transacao.realizarDoacao();
        expect(resultado.organizacao).toBe('ONG A');
        expect(resultado.valor).toBe(100);
      });
})