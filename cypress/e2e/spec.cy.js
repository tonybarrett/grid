it ('my first test', () => {
    cy.visit('/')
    cy.get('#num_cards').click();
    cy.get('#num_cards').clear();
    cy.get('#num_cards').type('33');
    cy.get('#num_columns').click();
    cy.get('#num_columns').clear();
    cy.get('#num_columns').type('5');

    cy.get('app-card:nth-child(33) #card')
        .should('be.visible');
})

