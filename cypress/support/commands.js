import '@testing-library/cypress/add-commands';

Cypress.Commands.add('getByDataTest', (seletor) => {
  return cy.get(`[data-test=${seletor}]`);
});

Cypress.Commands.add('verificaTexto', (seletor, texto) => {
  cy.get(`${seletor}`).contains(`${texto}`);
});
