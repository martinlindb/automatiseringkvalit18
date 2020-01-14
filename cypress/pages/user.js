const verifyFail2 = 'A persistence error occurred'

function functUser(cy){
    cy.get('#side-menu > :nth-child(7) > a').click()
    cy.get('.btn-primary').click()
    cy.get('#typeUser').select('2')
    cy.get('#login').type('Kalle')
    cy.get('#password').type('Password123')
    cy.get('#retypingPassword').type('Password123')
    cy.get('#clientId').select('1')
    cy.get('#userStatusId').select('1')
    cy.get('.btn-primary').click()
    cy.contains(verifyFail2)

}

// exports 
module.exports ={
    functUser
}