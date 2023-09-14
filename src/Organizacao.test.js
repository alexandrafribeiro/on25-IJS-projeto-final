const Organizacao = require('./Organizacao.js');

describe('Testes aquivo Organizacao', ()=> {
    let organizacao;
    beforeEach(() => {
        organizacao = new Organizacao('ONG A');
    });

    it('Deve receber doação', () => {
        organizacao.receberDoacao(500);
        expect(organizacao.totalDoacoes).toBe(500);
      });
      
      it('Deve exibir o total de doações', () => {
        organizacao.receberDoacao(500);
        expect(organizacao.exibirTotalDoacoes()).toBe('Total de doações recebidas pela ONG A: 500');
      });
})