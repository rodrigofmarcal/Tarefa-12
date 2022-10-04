/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

  beforeEach(() => {
      cy.visit('produtos')
  });

  it('Deve selecionar 4 produtos e adicionar ao carrinho', () => {
      cy.get('.post-3680 > .product-block > .caption > .meta > .infor > .name > a').click()
      cy.get('.button-variable-item-M').click()
      cy.get('.button-variable-item-Blue').click()
      cy.get('.input-text').clear().type(1)
      cy.get('.single_add_to_cart_button').click()
      cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 1)
      cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho.')

      cy.get('#primary-menu >.menu-item-629 > a').click()
      cy.get('.post-3345 > .product-block > .caption > .meta > .infor > .name > a').click()
      cy.get('.button-variable-item-S').click()
      cy.get('.button-variable-item-Red').click()
      cy.get('.input-text').clear().type(1)
      cy.get('.single_add_to_cart_button').click()
      cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 2)
      cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho.')
      
  });

});