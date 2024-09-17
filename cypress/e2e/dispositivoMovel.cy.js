describe('Testando dispositivos móveis', () => {
  it('Deve existir um botão menu burguer', () => {
    cy.visit('/');
    cy.getByDataTest('botao-login').click();
    cy.getByDataTest('email-input').type('vinii.viniciusribeiro@gmail.com');
    cy.getByDataTest('senha-input').type('Açucar77*');
    cy.getByDataTest('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');

    cy.getByDataTest('menu-burguer').click();
    cy.getByDataTest('menu-lateral').find('a').eq(3).click();

    cy.location('pathname').should('eq', '/home/investimentos');
  });
});
