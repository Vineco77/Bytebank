describe('Acessando múltiplas páginas', () => {
  it('Acessar página principal', () => {
    cy.visit('/');
    cy.getByDataTest('botao-login').click();
    cy.getByDataTest('email-input').type('emi.stutz86@gmail.com');
    cy.getByDataTest('senha-input').type('123456');
    cy.getByDataTest('botao-enviar').click();
    cy.location('pathname').should('eq', '/home');
  });

  it('Acessar página de cartões', () => {
    cy.visit('/home');
    cy.getByDataTest('app-home').find('a').eq(1).click();
    cy.url().should('include', '/cartoes');
    cy.location('pathname').should('eq', '/home/cartoes');
  });
});
