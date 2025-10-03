it ('are the cards created and displayed', () => {
    cy.visit('/')
    cy.get('[data-cy="num_cards"]').click();
    cy.get('[data-cy="num_cards"]').clear();
    cy.get('[data-cy="num_cards"]').type('33');
    cy.get('[data-cy="num_columns"]').click();
    cy.get('[data-cy="num_columns"]').clear();
    cy.get('[data-cy="num_columns"]').type('5');

    cy.get('app-card:last #card')
        .should('be.visible');
})

