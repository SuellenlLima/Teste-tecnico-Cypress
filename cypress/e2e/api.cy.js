describe('Testes da resposta da API de Posts', () => {
  
    // Validar se o retorno da API contem os dados corretos
    it('Deve retornar a lista de posts corretamente', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          // Verifica se o status da resposta é 200 (sucesso)
          expect(response.status).to.eq(200);
          // Verifica se o corpo da resposta é um array
          expect(response.body).to.be.an('array');
          // Verifica se o primeiro item da lista tem a propriedade 'title'
          expect(response.body[0]).to.have.property('title');
          // Verifica se o primeiro item da lista tem a propriedade 'body'
          expect(response.body[0]).to.have.property('body');
        });
    });
  
    // Validar reacao da API ao fazer requisicao para uma URL incorreta
    it('Simular um status code 404', () => {
      cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/urlinvalida',
        failOnStatusCode: false // so falhar se o status for diferente de 200
      })
      .then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });