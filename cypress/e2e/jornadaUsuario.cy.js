describe('Jornadas de usuário', () => {
  it('Deve permitir que a pessoa usuária acesse a aplicação, realize uma transação e faça um logout', () => {
    cy.visit('/');
    cy.getByDataTest('botao-login').click();
    cy.getByDataTest('email-input').type('vinii.viniciusribeiro@gmail.com');
    cy.getByDataTest('senha-input').type('Açucar77*');
    cy.getByDataTest('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');

    cy.getByDataTest('select-opcoes').select('Transferência');
    cy.getByDataTest('form-input').type('80');
    cy.getByDataTest('realiza-transacao').click();

    cy.getByDataTest('lista-transacoes').find('li').last().contains('- R$ 80');

    cy.getByDataTest('botao-sair').click();
    cy.location('pathname').should('eq', '/');
  });

  it.only('Deve permitir que a pessoa usuária faça um cadastro na aplicação, e logo depois faça o login', () => {
    cy.visit('/');
    cy.getByDataTest('botao-cadastro').click();
    cy.getByDataTest('nome-input').type('Mario Silva');
    cy.getByDataTest('email-input').type('mario.silva1@gmail.com');
    cy.getByDataTest('senha-input').type('mariosilva');
    cy.getByDataTest('checkbox-input').click();
    cy.getByDataTest('botao-enviar').click();

    cy.location('pathname').should('eq', '/');

    cy.getByDataTest('botao-login').click();
    cy.getByDataTest('email-input').type('mario.silva1@gmail.com');
    cy.getByDataTest('senha-input').type('mariosilva');
    cy.getByDataTest('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');
  });
});
