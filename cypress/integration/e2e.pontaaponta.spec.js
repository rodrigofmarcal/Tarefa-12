/// <reference types="cypress" />

describe('Teste de ponta a ponta Ebac shop', () => {

  beforeEach(() => {
    cy.visit("/")
  });

  it('Deve fazer o pedido de ponta a ponta', () => {
    var quantidade = 4, nomeFaker

//adicionar produto
cy.adicionarProduto('Atlas Fitness Tank')

    //fazer checkout
   cy.fazerCheckout('Rodrigo', 'Marcal', 'Uber', 'Brasil', 'Rua hum n2', 'Sao Paulo', 'SP', '11000000', '11999999999', 'forabolsonaroimbecil@gmail.com')


      });

  
});