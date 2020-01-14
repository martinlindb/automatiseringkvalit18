const verifyEdit = 'Client was successfully updated'

function functEditc(cy){
    cy.get(':nth-child(5) > a').click()
    cy.get('tbody > :nth-child(1) > :nth-child(7) > :nth-child(2)').click()
    cy.get('#name').clear()  
    cy.get('#name').type(Math.floor(Math.random() * 1000) + 'Edited')
    cy.get('#email').clear()  
    cy.get('#email').type(Math.floor(Math.random() * 1000) + 'Edited@email.com')
    cy.get('#socialSecurityNumber').clear()  
    cy.get('#socialSecurityNumber').type(Math.floor(Math.random() * 10000))
    cy.get('.btn-primary').click()
    cy.contains(verifyEdit)
}

// exports 
module.exports ={
    functEditc
}