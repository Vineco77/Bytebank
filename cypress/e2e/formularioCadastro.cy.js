describe('Formulario de Cadastro', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('Usuário deve conseguir se cadastrar com sucesso ', () => {
    cy.getByDataTest('botao-cadastro').click();
    cy.getByDataTest('nome-input').type('Gui Lima');
    cy.getByDataTest('email-input').type('gui@gmail.com');
    cy.getByDataTest('senha-input').type('456789');
    cy.getByDataTest('botao-enviar').click();
    cy.getByDataTest('mensagem-sucesso')
      .should('exist')
      .and('have.text', 'Usuário cadastrado com sucesso!');
  });

  it('Não deve permitir o cadastro de usuários com email e senha inválido', () => {
    cy.getByData('botao-cadastro').click();
    cy.getByData('email-input').type('moni@alura.com');
    cy.getByData('senha-input').type('987654');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro')
      .should('exist')
      .and('have.text', 'O campo de nome é obrigatório');
  });
});
