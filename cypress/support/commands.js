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


Cypress.Commands.add('Login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()

})


Cypress.Commands.add('adicionarProduto', (produto, tamanho, cor, quantidade) => {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('[class="product-block grid"]').contains(produto).click()
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()

});

Cypress.Commands.add('fazerCheckout', (nome, sobrenome, empresa, país, endereco, cidade, estado, cep, telefone, email) => {
    cy.get('.checkout-button').click()
    cy.get('#billing_first_name_field > label').click()
    cy.get('#billing_first_name').clear().type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#billing_company').clear().type(empresa)
    cy.get('#select2-billing_country-container').click().type(país).click()
    cy.get('#billing_address_1').clear().type(endereco).click()
    cy.get('#billing_city').clear().type(cidade).click()
    cy.get('#select2-billing_state-container').click().type(estado).click()
    cy.get('#billing_postcode').clear().type(cep).click()
    cy.get('#billing_phone').clear().type(telefone).click()
    cy.get('#billing_email').clear().type(email).click()
    cy.get('.woocommerce-terms-and-conditions-wrapper > .form-row').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.get('.woocommerce-notice').should('contain','Obrigado. Seu pedido foi recebido')

});