/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

  beforeEach(() => {
    cy.visit('produtos')
  });

  it('Deve selecionar produto ao carrinho e concluir a compra incluindo checkout', () => {
    var quantidade = 4, nomeFaker
    cy.get('[class="product-block grid"]').contains('Atlas Fitness Tank').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade + ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    cy.get('#billing_first_name_field > label').click()
    cy.get('#billing_first_name').type('Rodrigo')
    cy.get('#billing_last_name').clear().type('Marcal')
    cy.get('#billing_company').clear().type('Uber')
    cy.get('#select2-billing_country-container').click().type('Brasil').click()
    cy.get('#billing_address_1').clear().type('rua um numero 2').click()
    cy.get('#billing_city').clear().type('SP').click()
    cy.get('#billing_state_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow > b').click().type('São Paulo').click()
    cy.get('#billing_postcode').clear().type(11000000).click()
    cy.get('#billing_phone').clear().type(11999999999).click()
    cy.get('#billing_email').clear().type('foraBolsonaro@imbecil.com').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
  
  });

  it('Deve selecionar produto ao carrinho usando comando customizado', () => {
    cy.addProdutos('Atlas Fitness Tank', 'M', 'Blue', '4')
    cy.get('.woocommerce-message').should('contain', ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')
    cy.get('.dropdown-toggle > .mini-cart-items')

  })

});