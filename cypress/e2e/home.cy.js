describe('home', () => {
  it('web deve estar online', () => {
    // Visitar a pagina da aplicacao    
    cy.visit('http://localhost:8080');

    // Validar titulo da pagina
    cy.title().should('eq', 'Posts'); 

    // Verificar se pelo menos um post esta presente na pagina
    cy.get('#posts-container .post').should('have.length.greaterThan', 0);

    // Clicar no primeiro post da lista
    cy.get('#posts-container .post').first().click();

    // Verificar se os detalhes do post estao visiveis
    cy.get('#post-details').should('be.visible');

    // Clicar no botao voltar
    cy.contains('button', 'voltar').click();
  });
});