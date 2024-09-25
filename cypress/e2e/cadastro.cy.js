describe('Teste de cadastro de usuário', () => {
  const usuario = {
    nome: 'Gui Lima',
    email: 'gui@email.com',
    senha: '456789',
  };

  it('Deve permitir cadastrar um usuáro com sucesso', () => {
    cy.visit('/');
    cy.getByData('botao-cadastro').click();
    cy.getByData('nome-input').type(usuario.nome);
    cy.getByData('email-input').type(usuario.email);
    cy.getByData('senha-input').type(usuario.senha);
    cy.getByData('checkbox-input').check();
    cy.getByData('botao-enviar').click({ force: true });

    cy.getByData('mensagem-sucesso')
      .should('exist')
      .contains('Usuário cadastrado com sucesso!');

    cy.request('GET', 'http://localhost:8000/users').then((resposta) => {
      expect(resposta.body).to.have.lengthOf.at.least(1);
      expect(resposta.body[resposta.body.length - 1]).to.deep.include(usuario);
    });
  });
});
