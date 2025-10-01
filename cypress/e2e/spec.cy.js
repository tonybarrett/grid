it ('my first test', () => {
    cy.visit('/')
    cy.get('[name="num_cards"]').click();
    cy.get('[name="num_cards"]').clear();
    cy.get('[name="num_cards"]').type('33');
    cy.get('[name="num_columns"]').click();
    cy.get('[name="num_columns"]').clear();
    cy.get('[name="num_columns"]').type('5');

    cy.get('app-card:nth-child(33) #card')
        .should('be.visible');
})

