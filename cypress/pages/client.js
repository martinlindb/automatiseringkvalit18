const verifyClient = 'Client was successfully created'

function functClient(cy){
    cy.get('#side-menu > :nth-child(5) > a').click()
    cy.get('.btn-primary').click()
    cy.get('#name').type(Math.floor(Math.random() * 1000) + 'Marre Lindt')
    cy.get('#email').type(Math.floor(Math.random() * 1000) + 'Marre@email.com')
    cy.get('[type="radio"]').check('M')
    cy.get('#socialSecurityNumber').type(Math.floor(Math.random() * 10000))
    cy.get('.btn-primary').click()
    cy.contains(verifyClient)
}

// exports 
module.exports ={
    functClient
}