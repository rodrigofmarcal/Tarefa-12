/// <reference types="cypress" />

describe('Teste de ponta a ponta Ebac shop', () => {

  beforeEach(() => {
    cy.visit("/minha-conta/")
    
  });

  it('Deve fazer o pedido de ponta a ponta', () => {
    
    cy.Login('aluno_ebac@teste.com', 'teste@teste.com')

    cy.adicionarProduto('Atlas Fitness Tank', 'Blue', 'XL', '4')

    cy.fazerCheckout('Rodrigo', 'Marcal', 'Uber', 'Brasil', 'Rua hum n2', 'Sao Paulo', 'Sergipe', '11000000', '11999999999', 'forabolsonaroinbecil@gmail.com')

  });


});