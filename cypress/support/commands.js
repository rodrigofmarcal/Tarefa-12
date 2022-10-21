// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




Cypress.Commands.add('adicionarProduto', (produto, tamanho, cor, quantidade) =>{
    cy.get('[class="product-block grid"]').contains(produto).click()
    cy.get('.button-variable-item-'+ tamanho).click()
    cy.get('.button-variable-item-'+ cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
});

Cypress.Commands.add('fazerCheckout', (nome, sobrenome, empresa, país, endereco, cidade, cep, telefone, email) =>{
    cy.get('.checkout-button').click()
    cy.get('#billing_first_name_field > label').click()
    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#billing_company').clear().type(empresa)
    cy.get('#select2-billing_country-container').click().type(país).click()
    cy.get('#billing_address_1').clear().type(endereco).click()
    cy.get('#billing_city').clear().type(cidade).click()
    cy.get('#billing_state_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow > b').click().type(estado).click()
    cy.get('#billing_postcode').clear().type(cep).click()
    cy.get('#billing_phone').clear().type(telefone).click()
    cy.get('#billing_email').clear().type(email).click()})